from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# Define the structure of the request data using Pydantic
class PredictionRequest(BaseModel):
    age: float
    sex: float
    total_cholesterol: float
    ldl: float
    hdl: float
    smoking: float
    diabetes: float

# Initialize the FastAPI app
app = FastAPI()

# --- Add CORS middleware ---
# This allows your React app (running on a different port) to talk to this API
origins = [
    "http://localhost",
    "http://localhost:3000", # Default for Create React App
    "http://localhost:5173", # Default for Vite
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Load the trained model
model = joblib.load('modles/model.pkl')

@app.get("/")
def read_root():
    return {"message": "Blood Pressure Prediction API is running."}

# Define the prediction endpoint
@app.post("/predict")
async def predict(request: PredictionRequest):
    # Convert the request data to a NumPy array
    features = np.array([[
        request.age, request.sex, request.total_cholesterol,
        request.ldl, request.hdl, request.smoking, request.diabetes
    ]])

    # Make a prediction
    prediction = model.predict(features)

    # Return the prediction as a JSON response
    return {"prediction": prediction[0]}