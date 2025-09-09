# 🌍💰 Cryptosteller

Cryptosteller is a simple Angular application that combines **Weather Forecasts** and **Crypto News/Prices** into a single dashboard.  
It helps users quickly check the weather in any city and stay updated with the latest cryptocurrency market news.

---

## ✨ Features

#### 🌍 Weather
- Search weather by **city name**
- Displays:
  - Current temperature
  - Min temperature
  - Weather condition (Clouds, Rain, Clear, etc.)
  - Weather description with icons
- Placeholder message when no city is searched
- Error handling for invalid cities (planned enhancement)
- Auto location weather (future scope)

#### 💰 Crypto
- Displays crypto news with images
- Shows crypto icons dynamically
- Links to full articles
- Planned:
  - Live crypto prices via API
  - % price change indicators
  - Watchlist functionality

### 🎨 UI/UX
- Clean and simple Bootstrap-based UI
- Responsive layout
- Placeholder shown when no results
- Future:
  - Dark Mode
  - Loading spinners/skeleton screens

---

## 🛠️ Tech Stack
- **Frontend**: Angular 18, TypeScript
- **Styling**: Bootstrap 5, Custom CSS
- **APIs**:
  - [OpenWeatherMap](https://openweathermap.org/api) (for weather data)
  - Crypto News API / Crypto Icons (for crypto section)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- Angular CLI

### Installation
```bash
# Clone repo
git clone https://github.com/your-username/cryptosteller.git

# Navigate to project folder
cd cryptosteller

# Install dependencies
npm install --legacy-peer-deps
