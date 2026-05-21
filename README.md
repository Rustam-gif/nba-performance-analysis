# NBA Performance Analysis

A machine learning project that analyzes NBA player statistics and predicts player scoring performance using regression modeling.

## Business question

Which player statistics are most useful for predicting points per game, and how accurately can a baseline machine learning model estimate scoring performance?

## Project overview

This project uses NBA player data to build and evaluate a Random Forest regression model. It demonstrates a practical data science workflow: data cleaning, exploratory analysis, feature selection, model training, evaluation, and interpretation.

## Workflow

1. Clean and prepare NBA player statistics
2. Explore distributions, correlations, and performance patterns
3. Select features related to player performance
4. Train a Random Forest regression model
5. Evaluate model quality with R2 and related regression metrics
6. Interpret the most important features

## Results

- Achieved an R2 score of approximately 0.87 on the test set
- Important predictive features included minutes played, assists, and rebounds
- The model helped identify which player statistics are most connected to scoring output

## Tools and libraries

- Python
- pandas
- NumPy
- scikit-learn
- matplotlib
- Jupyter Notebook

## Skills demonstrated

- Data cleaning
- Exploratory data analysis
- Feature engineering
- Regression modeling
- Random Forest model training
- Model evaluation and interpretation

## Next improvements

- Add a reproducible `requirements.txt`
- Add a notebook summary with charts and model outputs
- Compare Random Forest against simpler baseline models
- Add feature importance visualizations to the README
- Document the dataset source and column definitions
