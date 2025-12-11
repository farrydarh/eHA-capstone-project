# <img width="512" height="211" alt="eHealth-Africa-Donates-1 9m-to-eha-Impact-Ventures-EIV" src="https://github.com/user-attachments/assets/60d2bba6-49be-4115-8964-29aa7b738c65" /><img width="900" height="629" alt="download" src="https://github.com/user-attachments/assets/df6acf3a-0c4a-43a9-aa2b-9340c2da4b63" />



# eHA Software Engineering Interns Capstone Project 2025

# 🩺 Breast Cancer Prediction Web Application

A machine learning–powered web application designed to predict whether a patient has benign or malignant breast cancer based on medical diagnostic measurements.
This project uses the Wisconsin Diagnostic Breast Cancer (WDBC) dataset and provides a simple user interface that allows patients or health workers to input numerical tumor features and receive predictions.

The system includes:

* A trained ML model
* A backend API for predictions
* A React.js frontend for user interaction
* Pages: HomePage, NextPage (input form), and ResultPage

# *👥 Team Members*

| Name                     | Role                                |
| ------------------------ | ----------------------------------- |
| **Al-amin Hamza Nababa** | Data Scientist, ML & MLOps Engineer, (Project Lead)|
| **Nafisa Iliyas Hotoro** | Front-end Engineer                  |
| **Farida Adesoye**       | Front-End Developer                 |
| **Franciz Nzeribe**        | Developer (Backend / Integrations)  |


# *⭐ Project Overview*

This project aims to help with early detection of breast cancer using machine learning models trained on diagnostic measurement data.
The final model predicts:
* M = Malignant
* B = Benign
  
**The application is intended for education and research, not medical diagnosis.**

# *🔥 Features*

* Machine learning–based cancer prediction
* Clean preprocessing pipeline
* REST API for prediction
* Easy-to-use React UI
* Error handling for missing inputs
* Fast prediction response
* Model interpretability-ready (SHAP compatible)

# *📊 Dataset — Wisconsin Diagnostic Breast Cancer (WDBC)*

* Samples: 569
* Features: 30 numeric features
* Target labels:
    1. M = Malignant
    2. B = Benign
* Data is anonymized and publicly provided by UCI.

# *🧠 ML Workflow & Model Summary*

1. Data Cleaning
2. Exploratory Data Analysis
3. Feature Scaling (StandardScaler)
4. Model Training
    * Logistic Regression
    * SVM
    * Random Forest (selected)
    * KNN
    * Decision Tree Classifier
    * GBC
    * XGboost
5. Model Evaluation (Accuracy, Precision, Recall)
6. Export model as model.pkl
7. Integration with backend API

**✔ Selected Model: SVM**
*High accuracy and robust performance across metrics.*

# *🧩 Tasks Assigned to Team Members*
**1. Al-amin Hamza Nababa—Data Scientist, ML & MLOps Engineer**
  * Data cleaning & preprocessing
  * Model training & validation
  * Model deployment (MLOps)
  * Due: Weeks 1–3

**2. Nafisa Iliyas Hotoro—Front-end Engineer**
  * Frontend architecture
  * Input form logic
  * API integration
  * Due: Weeks 1–2

**3. Farida Adesoye—Front-end Engineer**
  * UI/UX design
  * Responsive layout
  * Result page implementation
  * Due: Weeks 1–2

**4. Francis Nzeri—Front-end Engineer**
  * Backend API creation
  * Error handling & validation
  * Testing endpoints
  * Due: Week 2

# *🙏 Acknowledgments*
  * UCI Machine Learning Repository
  * scikit-learn community
  * React.js open-source community
  * eHA Software Department Support
