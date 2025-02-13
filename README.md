# JoshsPortfolio

## 🚀 Project Overview
This is a **React-based** portfolio website built with **Vite**. It features a responsive design, smooth scrolling, a dynamic portfolio section using the **GitHub API**, and interactive contact and resume sections.

## ✨ Features
- **🏠 Home Page** – Landing section with animated text
- **🙋 About Page** – Personal details and skills
- **💼 Portfolio Section** – Showcases projects with live GitHub API integration
- **📩 Contact Section** – Sends messages via Email.js
- **📜 Resume Modal** – Displays resume with download & print options
- **🌐 Social Media Links** – Includes GitHub and LinkedIn buttons
- **🎨 Dark Mode & Neon Glow Theme** – Consistent aesthetic across all pages
- **📱 Mobile-Friendly** – Fully responsive design

---

## 📦 Technologies Used
- **Frontend:** React, Vite, Tailwind CSS (for some styling), FontAwesome
- **API:** GitHub API (for project listings)
- **Email Integration:** Email.js (for contact form submissions)
- **Deployment:** Netlify

---

## 🔧 Setup & Installation
### **1️⃣ Clone the repository**
```bash
git clone https://github.com/JoshsDesk/portfolio.git
cd portfolio
```

### **2️⃣ Install dependencies**
```bash
npm install
```

### **3️⃣ Start the development server**
```bash
npm run dev
```
_This will run the site locally on_ **`http://localhost:5173`**.

---

## 🛠 Configuration
### **GitHub API (for Portfolio section)**
The portfolio dynamically fetches repositories from your **GitHub** account.
- To update the username, edit:
  ```javascript
  const GITHUB_USERNAME = "JoshsDesk"; // Update with your GitHub username
  ```

## **WORK IN PROGRESS**
### **Email Integration (Email.js) **
1. Create an account at [Email.js](https://www.emailjs.com/)
2. Create a new **Email Template** (include `{{name}}`, `{{email}}`, and `{{message}}` in the email body)
3. Copy the **Template ID**
4. Go to **Integration** and copy the **Public Key**
5. Add these to `.env` file:
   ```plaintext
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_public_key
   ```
6. Restart the development server



---

## 🙌 Acknowledgments
- **FontAwesome** for icons
- **Swiper.js** for the interactive portfolio
- **Vite** for fast build times
- **Netlify** for deployment
- **GitHub API** for project fetching

---

## 📝 Author
Developed by **Josh Bourassa**. Find me on:
- **GitHub**: [JoshsDesk](https://github.com/JoshsDesk)
- **LinkedIn**: [Josh's LinkedIn](https://linkedin.com/in/joshbourassa)

---

🚀 **Thank you for visiting my portfolio!**

---


## 📜 License
This project is **MIT Licensed**.