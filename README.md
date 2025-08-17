# 🏀 NBA Performance Analysis – Machine Learning Project

This project uses NBA player data to build and evaluate a **Random Forest Regression model** to predict player performance. It was created as part of my data analytics learning journey using Python and Jupyter Notebook.

---

## 📌 Overview

- Cleaned and explored NBA player data  
- Identified key features that influence player performance  
- Built a Random Forest model to predict points per game  
- Evaluated the model's performance and visualized insights

---

## ⚙️ Tools & Libraries

- Python  
- pandas, NumPy  
- scikit-learn  
- matplotlib  
- Jupyter Notebook  

---

## 🧪 Process

1. **Data Cleaning** – handled missing values, renamed columns  
2. **Exploratory Analysis** – histograms, heatmaps, and correlations  
3. **Feature Engineering** – selected performance-related stats  
4. **Modeling** – Random Forest Regressor  
5. **Evaluation** – achieved **R² score of 0.87** on test data

---

## 📈 Results

- Model explained 87% of the variance in player performance  
- Most influential features: **minutes played, assists, and rebounds**  
- Helped visualize trends among top-performing NBA players

---

## Teaching PDF Generator

Paste your lesson content into a single file and generate a clean, A4, print-ready PDF with one command.

### Quick Start

1) Install dependencies

```bash
npm install
```

2) Add or replace content

- Edit `content/content.html` only. Paste your text and use minimal HTML for structure:
  - Title: `<h1 class="title">Your Big Title</h1>`
  - Section headings: `<h1>...</h1>` or `<h2>...</h2>`
  - Paragraphs: `<p>...</p>`
  - Exercises: wrap questions in an `.exercise` block; questions are auto-numbered
    ```html
    <div class="exercise">
      <p>Prompt text...</p>
      <div class="question"><p>Question 1</p></div>
      <div class="question"><p>Question 2</p></div>
    </div>
    ```
  - Optional page break anywhere: `<div class="page-break"></div>`

3) Generate the PDF

```bash
npm run generate
```

- Output: `output/output.pdf`

### Styling

- Clean fonts: Lato and Roboto via Google Fonts
- A4 page size, generous margins, print backgrounds enabled
- Big centered title, consistent headings, easy-to-read body
- Exercises: numbered, indented questions, light background box, avoids splitting across pages

You only ever edit `content/content.html`. The template and styles are injected automatically.

---
