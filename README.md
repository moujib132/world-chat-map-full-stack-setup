
# World Chat Map

A real-time world chat application where users can chat with nearby people on a live map or join a global chat lounge.

## Features

- 🗺️ **Map View** - Live map showing nearby users within adjustable radius (1-10 km)
- 💬 **Local Chat** - Chat with people in your area
- 🌍 **Global Lounge** - Worldwide chat accessible to everyone
- 🎥 **Video Calls** - Voice and video calls using WebRTC
- 👻 **Ghost Mode** - Hide your location while chatting
- 🌐 **Multi-language** - English and Arabic support
- 🌓 **Dark Mode** - Light and dark theme support
- 🔐 **Authentication** - Google, Phone, and Guest login

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Routing**: React Router
- **Authentication**: Firebase Auth
- **Database**: Firebase Realtime Database
- **Maps**: Mapbox GL JS
- **Video/Voice**: WebRTC
- **State Management**: React Context + TanStack Query

## Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Add your Firebase and Mapbox credentials

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Google, Phone, Anonymous)
3. Enable Realtime Database
4. Enable Storage
5. Copy your config to `.env`

## Mapbox Setup

1. Create account at [mapbox.com](https://www.mapbox.com)
2. Get your access token
3. Add to `.env` as `VITE_MAPBOX_ACCESS_TOKEN`

## Project Structure
