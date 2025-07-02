# 💱 Concurrency: Currency Converter App

A modern, full-stack web application for converting currencies using historical exchange rates. Built with React, Tailwind CSS, and Express.js.

---

## ✨ Features
- Convert between any two currencies using historical rates
- Select date, source, and target currencies
- Responsive, clean UI with Tailwind CSS
- Fast, real-time conversion powered by a Node.js/Express backend

---

## 🛠️ Tech Stack
- **Frontend:** React 19, Tailwind CSS 3
- **Backend:** Node.js, Express
- **HTTP Client:** Axios
- **API Source:** [Open Exchange Rates](https://openexchangerates.org/)

---

## 📁 Folder Structure
```
Concurrency/
  currency_app/
    client/   # React + Tailwind frontend
    server/   # Express backend
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Concurrency/currency_app
```

### 2. Setup the Backend
```bash
cd server
npm install
npm start
# Server runs on http://localhost:5000
```

### 3. Setup the Frontend
```bash
cd ../client
npm install
npm start
# App runs on http://localhost:3000
```

---

## 🖥️ Usage
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Select the date, source currency, target currency, and amount.
- Click **Convert** to see the converted amount instantly!

---

## 📡 API Endpoints
- `GET /getAllCurrencies` — Fetches all available currency codes and names
- `GET /convertCurrency?date=YYYY-MM-DD&sourceCurrency=USD&targetCurrency=EUR&amountInSourceCurrency=100` — Converts the given amount from source to target currency using historical rates

---

## 🖼️ Screenshots
> _Add screenshots of your app here!_
| ![26](https://github.com/user-attachments/assets/6b39d82c-a031-4251-95bb-cbdca4410770) | ![27](https://github.com/user-attachments/assets/66c40729-5917-47f6-926e-222d3a3d7827) |
---

## 🤝 Credits
- [Open Exchange Rates](https://openexchangerates.org/) for currency data
- Built with [Create React App](https://create-react-app.dev/) and [Tailwind CSS](https://tailwindcss.com/)

---

