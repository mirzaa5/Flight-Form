# SkyForm - Flight Booking App

An Angular application for booking flights with Google authentication and Firebase hosting.

**Live Demo**: [https://flight-info-challenge-72aa1.web.app](https://flight-info-challenge-72aa1.web.app)

*Clean, modern login interface with Google authentication*

## Quick Setup

### Prerequisites
- Node.js (v18 or higher)
- npm
- Firebase CLI

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd flightInfoApp
   npm install
   ```

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

4. **Set Firebase project**
   ```bash
   firebase use --add
   ```
   Select: `flight-info-challenge-72aa1`

5. **Run the app**
   ```bash
   npm start
   ```
   Open [http://localhost:4200](http://localhost:4200)

## App Flow

### 1. Login Page
- Google OAuth authentication
- Gradient background design
- Responsive layout

### 2. Flight Booking Form
- Secure, authenticated access
- Flight details form with validation
- User profile display

### 3. Success Confirmation
- Submission confirmation
- Success messaging
- Sign out option

## Project Structure

```
src/app/
├── components/
│   ├── login-component/        # Google auth login
│   └── flight-form-component/  # Flight booking form
├── core/
│   ├── guards/
│   │   └── auth-guard.ts      # Route protection
│   └── services/
│       ├── auth.service.ts    # Google Auth management
│       └── flight-service.ts  # Flight API integration
├── models/
│   └── flight.model.ts        # Flight data interface
└── environments/              # Firebase config
```

## Key Features

- Google OAuth authentication
- Route protection with guards
- Reactive forms with validation
- Firebase integration
- Responsive Tailwind CSS design
- API integration for flight submissions

## Development

```bash
npm start              # Development server
npm run build:prod     # Production build
npm test              # Run tests
npm run deploy        # Build and deploy to Firebase
```

## API Integration

The app submits flight data to:
- **Endpoint**: `https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge`
- **Method**: POST
- **Headers**: Token and candidate information
- **Payload**: Flight details (airline, date, time, guests, comments)

## Technologies

- Angular 20, TypeScript
- Firebase Auth & Hosting
- Tailwind CSS
- Google OAuth
- Reactive Forms

## Deployment

The app is configured for Firebase Hosting:
- Build output: `dist/flightInfoApp/`
- Project: `flight-info-challenge-72aa1`

```bash
npm run deploy
```

---