import React from 'react';
import './App.css';
import Images from './images/Images';
import Navbar from './navigation/Navbar';
import { useTheme } from './theme/ThemeContext';
import { ThemeData } from './theme/ThemeData';

function App() {
  const themeContext = useTheme();
  
  return (
    <div style={ThemeData[themeContext?.theme]} className="App">
      <Navbar />
      <Images />
    </div>
  );
}

export default App;
