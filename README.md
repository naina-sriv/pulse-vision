
# **PulseVision – Systolic Pressure Estimator**

**PulseVision** is an end-to-end web application designed to estimate systolic blood pressure using machine learning. It integrates data processing, model training, and an intuitive browser-based interface into one cohesive system.

---

## 🌟 Key Highlights

* **User-Friendly Interface** – Lightweight, responsive React (Vite) UI for effortless data entry.
* **AI-Driven Analysis** – A deployed Lasso Regression model delivers immediate predictions.
* **API-Centric Design** – FastAPI backend exposes model functionality through clean REST endpoints.
* **Parallel Workflow** – Frontend and backend can be launched together for smooth development.
* **Streamlined Deployment** – Preconfigured setup allows you to get started with minimal effort.

---

## 🧰 Technology Overview

**Backend**

* Python 3
* FastAPI (REST API)
* scikit-learn (machine learning)
* joblib (model serialization)
* Uvicorn (server runtime)

**Frontend**

* React (Vite)
* JavaScript
* HTML5 / CSS3

**Development Utilities**

* `concurrently` – runs both frontend and backend in parallel

---

## 📁 Directory Layout

```
pulsevision/
├── backend/
│   ├── main.py           # FastAPI application entry point
│   ├── model.pkl         # Pre-trained ML model
│   └── requirements.txt  # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   └── App.jsx       # Root React component
│   ├── package.json      # Frontend dependencies
│   └── ...
│
└── package.json          # Root config for unified start scripts
```

---

## ⚡ Getting Started

**Requirements**

* Python 3.8+
* Node.js with npm

### 1. Clone Repository

```bash
git clone <repo-url>
cd pulsevision
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv

# Activate environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
cd ..
```

### 3. Frontend Setup

```bash
npm install
```

---

## ▶️ Run the App

From the **project root**:

```bash
npm run dev
```

This will:

* Launch the **FastAPI service** at [http://127.0.0.1:8000](http://127.0.0.1:8000)
* Start the **React development server** (default: [http://localhost:5173](http://localhost:5173))

---

## 📌 How to Use

1. Access the frontend in your browser.
2. Enter health and lifestyle inputs into the form.
3. Hit **Predict** to view the estimated systolic pressure.

---

## 🤖 Model Overview

* **Type**: Lasso Regression
* **Metrics**:

  * R² Score: 0.14
  * Mean Absolute Error: 11.69
* **Model Choice Rationale**: Among the tested algorithms (including Decision Tree and Random Forest), Lasso Regression demonstrated the best balance between predictive accuracy and error minimization for this dataset.

