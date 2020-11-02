import React from 'react';
import { Radar } from 'react-chartjs-2';
import './App.css';
import BarPlot from './components/BarPlot';
import BubblePlot from './components/BubblePlot';
import LinePlot from './components/LinePlot';
import PiePlot from './components/PiePlot';
import RadarPlot from './components/RadarPlot';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
