


# 🍽️ QuickServe – AI-Powered Food Ordering Chatbot

A full-stack web application that allows users to place food orders using natural language through a Dialogflow-integrated AI chatbot. Built using FastAPI, MySQL (TiDB Cloud), HTML/CSS/JS, and deployed securely to production using Render and Netlify.

---

## 👨‍💻 Tech Stack

| Frontend        | Backend             | Database           | AI/ML            | Hosting           |
|-----------------|---------------------|---------------------|------------------|--------------------|
| HTML, CSS, JS   | Python + FastAPI    | TiDB Cloud (MySQL)  | Dialogflow (NLP) | Render (API), Netlify (Frontend) |

---

## ✨ Features

### 🧠 Dialogflow Chatbot
- Integrated Dialogflow chatbot named **Mira**
- Understands natural language food orders like:
  > “I want 2 samosas and 1 pav bhaji”
- Context-aware, supports:
  - Adding/removing items
  - Completing orders
  - Tracking order status

### ⚙️ FastAPI Backend
- Handles webhook POST requests from Dialogflow
- Processes intent and parameters
- Calculates total order price with live DB access
- Returns structured fulfillment responses to chatbot

### 🗃️ MySQL via TiDB Cloud
- Cloud-hosted and scalable MySQL-compatible DB
- Tables:
  - `food_items` for menu & pricing
  - `orders` for each item in an order
  - `order_tracking` for live status updates
- Avoids stored procedures for TiDB compatibility

### 🛡️ Secure Cloud Hosting
- **Render** hosts FastAPI backend with HTTPS, env vars, and TLS
- **Netlify** serves the static frontend (HTML/CSS/JS)
- TLS/SSL enabled by default via hosting platforms

### 🌐 Responsive UI
- One-page visually rich menu with modern layout
- Floating chatbot icon with popup animation
- Optimized for desktop & mobile users
- Includes interactive audio feedback

---

## 🚀 Live Demo

- **Frontend:** [https://atharvnikam.xyz/](https://atharvnikam.xyz/)
- **Backend API:** [https://quickservebackend.onrender.com](https://quickservebackend.onrender.com)
- **Dialogflow:** Connected via secure webhook URL

---

## 📂 Folder Structure

```

/frontend
└── index.html         # Main UI + chatbot iframe
└── popup.mp3          # Chatbot notification sound

/backend
├── main.py            # FastAPI app
├── db\_helper.py       # Database logic for TiDB
├── generic\_helper.py  # Session ID extraction & utilities
├── tidb-ca.pem        # SSL certificate for TiDB Cloud
└── requirement.txt    # Python dependencies

````

---

## 🧪 Sample Flow

> User: “I’d like 1 biryani and 2 samosas”  
> → Dialogflow detects intent & items  
> → FastAPI backend fetches prices from DB  
> → Calculates total  
> → Responds:  
> “Order ID #56 placed. Total is ₹260. Pay on delivery!”

---

## 💼 Interview-Focused Highlights

- 🌐 **Deployed full-stack system** using FastAPI + TiDB + Dialogflow
- 🧠 Built a **conversational AI assistant** with natural language understanding
- 🛠️ Wrote production-ready API & database logic using clean Python code
- 🔒 Secured backend with SSL, env variables, and cloud-hosted DB (no localhost)
- 💬 Used contextual chatbot sessions for real-time interaction
- 📦 Demonstrates **end-to-end understanding of full stack development**

---

## 📌 How to Run Locally

```bash
# Backend
pip install -r requirement.txt
uvicorn main:app --reload

# Expose locally for Dialogflow testing (optional)
ngrok http 8000
````

> Frontend can be opened directly via `index.html` or hosted on Netlify.

---

## 🛠️ Database Tables (TiDB)

### `food_items`

| Column   | Type          |
| -------- | ------------- |
| item\_id | INT (PK)      |
| name     | VARCHAR(255)  |
| price    | DECIMAL(10,2) |

### `orders`

| Column       | Type          |
| ------------ | ------------- |
| order\_id    | INT (PK)      |
| item\_id     | INT           |
| quantity     | INT           |
| total\_price | DECIMAL(10,2) |

### `order_tracking`

| Column    | Type         |
| --------- | ------------ |
| order\_id | INT (PK)     |
| status    | VARCHAR(255) |

---

## 🙋 About Me

Hi, I’m Atharv Nikam — a passionate full-stack student developer from Mumbai focused on AI, automation, and real-world applications that solve real problems.

* 📫 Email: [2022.atharv.nikam@ves.ac.in](mailto:2022.atharv.nikam@ves.ac.in)

---

> “This project reflects my ability to build scalable, intelligent applications by integrating backend engineering, cloud hosting, databases, and conversational AI.”

```


