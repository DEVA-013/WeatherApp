# 🌦 Weather App

A simple weather forecast web app built using **HTML**, **CSS**, and **JavaScript**.  
It fetches real-time weather data from the **OpenWeatherMap API** and displays temperature, humidity, and weather conditions for any city entered by the user.

---

## 🚀 Features

- 🌍 Search weather by city name  
- 🌡 Displays temperature, humidity, and description  
- ☁️ Dynamic weather icons  
- 💜 Clean pastel-purple UI  
- ⚙️ Uses OpenWeatherMap API  
- 🔒 API key stored separately in `config.js` (not uploaded to GitHub)

---

## 🛠️ Tech Stack

| Purpose | Tools Used |
|----------|-------------|
| Frontend | HTML, CSS, JavaScript |
| API | OpenWeatherMap |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

weather-app/
│
├── index.html          # Main HTML file
├── style.css           # Styling (pastel purple theme)
├── script.js           # Main JS logic
├── config.js           # API key file (excluded from GitHub)
├── .gitignore          # Ignore sensitive files
└── README.md           # Project description

---

## ⚙️ Setup Instructions

1. **Clone or download** this repository:
   git clone https://github.com/your-username/weather-app.git

2. **Create a new file** named `config.js` in the project root:
   // config.js
   const apiKey = "your_openweathermap_api_key";

3. **Add config.js to .gitignore** so your API key isn’t public:
   config.js

4. **Open `index.html` in your browser** — no server setup required!

---

## 💡 Example Usage

1. Type a city name (e.g., “Chennai”).  
2. Click the **Search** button.  
3. The app shows:  
   - Current temperature  
   - Weather description  
   - Humidity  
   - Weather icon  

---

## 📸 Screenshot (Optional)

![Weather App Preview](screenshot.png)

---

## 🧠 Learning Highlights

- Using **Fetch API** to get JSON data  
- Handling API responses & errors  
- Updating DOM elements dynamically  
- Separating API keys for safety  

---

## 📝 License

This project is open source and available under the **MIT License**.
