import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Lasso

# 1. Load and Prepare Data
df = pd.read_csv('Dataset/updated_version.csv')
features = ['age', 'sex', 'total_cholesterol', 'ldl', 'hdl', 'smoking', 'diabetes']
X = df[features]
y = df['systolic_bp']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Train the Best Model (Lasso)
print("Training the Lasso model...")
lasso_model = Lasso(random_state=42)
lasso_model.fit(X_train, y_train)
print("Training complete.")

# 3. Save the Trained Model to a File
joblib.dump(lasso_model, 'modles\model.pkl')
print("Model saved successfully to model.pkl")