# 🛍️ DreamsPOS - Modern POS Dashboard & Auth System

DreamsPOS is a full-featured React Web Application designed for a Point of Sale (POS), inventory, and sales management system. It features a clean, highly responsive authentication system and a data-rich, interactive admin dashboard.

## ✨ Features

### 🔐 Authentication System
* **Sign In & Sign Up:** Fully responsive pages strictly locked to `100vh` for a seamless, scroll-free experience.
* **Local Storage Auth:** User registration and login data are securely handled using the browser's Local Storage API.
* **Duplicate Check:** Automatic validation to prevent multiple registrations with the same email address.
* **Secure Routing:** Users are redirected to the dashboard only upon successful authentication.
* **Password Toggle:** Integrated eye-icon functionality to easily hide or show passwords.

### 📊 Admin Dashboard
* **Responsive Sidebar:** A clean, professional navigation sidebar to manage inventory, stock, and reports.
* **Stat Cards:** Dynamic and colorful metrics cards displaying sales, purchases, and profit margins.
* **Interactive Charts:** Data visualization using `Recharts` for sales and purchase bar charts.
* **Product Insights:** Dedicated sections for top-selling products and low-stock alert banners.
* **Topbar:** A modern header complete with a search bar, notification counter, and logout functionality.

## 🚀 Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS (Custom Compact UI)
* **Icons:** Lucide-React
* **Charts:** Recharts
* **Routing:** React Router DOM (v6)
* **Storage:** Browser LocalStorage API

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── dashboard/       # Sidebar, Topbar, StatCards, Charts
│   ├── AuthLayout.jsx   # Common layout for Login/Register
│   ├── InputField.jsx   # Reusable UI Input components
│   └── SocialAuth.jsx   # Social login buttons
├── dashboard/
│   └── Dashboard.jsx    # Main Dashboard Page
├── pages/
│   ├── SignIn.jsx       # Login Logic & View
│   └── Register.jsx     # Registration Logic & View
├── App.jsx              # Routing Configuration
└── main.jsx             # Entry point

```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asit4qh/Dreams.git
   ```

2. **Navigate to the project directory:**
```bash 
cd dreams 
```

3. **Install dependencies:**
```bash 
npm install 
```
4. **Start the development server:**
```bash 
npm run dev 
```