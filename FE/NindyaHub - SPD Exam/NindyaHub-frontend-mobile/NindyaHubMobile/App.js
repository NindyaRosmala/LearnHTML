import React, { useState } from 'react';
import LoginScreen from './src/screen/LoginScreen';
import Dashboard from './src/screen/Dashboard';
import SettingsScreen from './src/screen/SettingsScreen';
import VideoTutorial from './src/screen/VideoTutorial';
import ReadArticles from './src/screen/ReadArticles';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('Dashboard'); 
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (user) => {
    setUserData(user);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  // Fungsi navigasi sentral
  const navigateTo = (screenName) => {
    setCurrentScreen(screenName);
  };

  // Switch Case berdasarkan nama Screen
  switch (currentScreen) {
    case 'Settings':
      return <SettingsScreen onBack={() => navigateTo('Dashboard')} />;
    case 'Video Tutorial':
      return <VideoTutorial onBack={() => navigateTo('Dashboard')} />;
    case 'Read Articles':
      return <ReadArticles onBack={() => navigateTo('Dashboard')} />;
    default:
      return (
        <Dashboard 
          user={userData} 
          onNavigate={navigateTo} 
        />
      );
  }
}