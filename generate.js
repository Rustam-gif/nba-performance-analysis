const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function buildHtml() {
	const templatePath = path.resolve(__dirname, 'templates', 'template.html');
	const stylesPath = path.resolve(__dirname, 'templates', 'styles.css');
	const contentPath = path.resolve(__dirname, 'content', 'content.html');

	const template = fs.readFileSync(templatePath, 'utf-8');
	const styles = fs.readFileSync(stylesPath, 'utf-8');
	const content = fs.readFileSync(contentPath, 'utf-8');

	const html = template
		.replace('<!-- INLINE_STYLES -->', `<style>\n${styles}\n</style>`) 
		.replace('<!-- CONTENT_PLACEHOLDER -->', content);

	return html;
}

async function generatePdf() {
	const html = await buildHtml();

	const outputDir = path.resolve(__dirname, 'output');
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}
	const outputPath = path.join(outputDir, 'output.pdf');

	const browser = await puppeteer.launch({
		headless: true
	});
	try {
		const page = await browser.newPage();
		await page.emulateMediaType('print');
		await page.setContent(html, { waitUntil: ['load', 'networkidle0'] });
		await page.pdf({
			path: outputPath,
			format: 'A4',
			printBackground: true,
			margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' }
		});
		console.log(`PDF generated at: ${outputPath}`);
	} finally {
		await browser.close();
	}
}

if (require.main === module) {
	generatePdf().catch((err) => {
		console.error('Failed to generate PDF:', err);
		process.exit(1);
	});
}