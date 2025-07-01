# Ryde 🚗

A full-featured Uber-like ride-hailing app built with React Native, Expo, and TypeScript. This project demonstrates a modern, scalable mobile architecture, beautiful UI/UX, and real-world features such as authentication, geolocation, ride booking, driver selection, payment, and ride history. Perfect for portfolio and learning advanced React Native patterns.

---

## 🚀 Overview

**Uber Clone** is a cross-platform mobile application that allows users to:
- Sign up and log in securely
- Search for rides using Google Places
- View their current location on a map
- Select pickup and drop-off points
- Browse available drivers and cars
- View driver ratings, car details, and estimated price/time
- Book and pay for rides
- View ride history and details
- Manage their profile

The app is built with a modular, maintainable codebase and leverages modern libraries for navigation, state management, UI, and backend integration.

---

## ✨ Features

- **Authentication**: Email/password and Google OAuth via Clerk
- **Onboarding**: Swipable onboarding screens with value proposition
- **Map & Geolocation**: Real-time user location, destination selection, and route display (Google Maps)
- **Ride Search**: Find rides by entering pickup and drop-off locations
- **Driver Selection**: Browse drivers, see ratings, car info, price, and ETA
- **Booking & Payment**: Confirm ride, simulate payment, and booking confirmation modal
- **Ride History**: View all past rides with details and map snapshots
- **Profile Management**: View and manage user info (name, email, phone, avatar)
- **Chat (UI)**: Placeholder for future messaging between user and driver
- **Responsive UI**: Beautiful, modern design with custom fonts and Tailwind CSS (NativeWind)
- **TypeScript**: Full type safety across the codebase

---

## 🛠️ Tech Stack

- **React Native** (Expo)
- **TypeScript**
- **Expo Router** (file-based navigation)
- **Clerk** (authentication)
- **Google Maps & Directions API**
- **NativeWind** (Tailwind CSS for React Native)
- **Zustand** (state management)
- **Neon Database** (Postgres serverless, for backend APIs)
- **Jest** (testing)

---

## 📦 Folder Structure

```
uber_clone/
├── app/                # App entry, screens, and API routes
│   ├── (auth)/         # Auth screens (sign-in, sign-up, welcome)
│   ├── (root)/         # Main app screens (tabs, booking, etc.)
│   ├── (api)/          # API routes (driver, ride, user)
│   └── ...
├── components/         # Reusable UI components
├── constants/          # Images, icons, onboarding data
├── lib/                # Utility functions (auth, fetch, map, etc.)
├── store/              # Zustand stores for app state
├── types/              # TypeScript types and interfaces
├── assets/             # Fonts, images, icons
├── scripts/            # Project scripts (reset, etc.)
├── ...
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (18+ recommended)
- Yarn or npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Google Maps API Key (for geolocation and directions)
- Clerk API Key (for authentication)
- Neon Database (or Postgres) connection string

### 1. Clone the repository
```bash
git clone https://github.com/NoOne6268/ryde.git
cd ryde
```

### 2. Install dependencies
```bash
yarn install
# or
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```
EXPO_PUBLIC_PLACES_API_KEY=your_google_maps_api_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
DATABASE_URL=your_neon_database_url
```

### 4. Start the app
```bash
npx expo start
```

- Open in Expo Go, Android/iOS simulator, or web browser.

---

## 🧭 Usage Guide

- **Sign Up / Log In**: Create an account or log in with Google/email
- **Onboarding**: Swipe through onboarding to learn about the app
- **Home**: See your location, search for a ride, view recent rides
- **Find Ride**: Enter pickup and drop-off locations
- **Confirm Ride**: Select a driver based on price, rating, and ETA
- **Book Ride**: Review ride details, confirm and pay
- **Rides**: View your ride history
- **Profile**: View and manage your profile
- **Chat**: (UI only) Placeholder for future messaging

---

## 🖼️ Screenshots

> _Add screenshots from the `/screenshots` folder here to showcase the UI_

---

## 🧩 Credits & Acknowledgements

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Clerk](https://clerk.dev/)
- [Google Maps Platform](https://developers.google.com/maps)
- [Neon Database](https://neon.tech/)
- [NativeWind](https://www.nativewind.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

## 📄 License

This project is for educational and portfolio purposes. Not for commercial use.
