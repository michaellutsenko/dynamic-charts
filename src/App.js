import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import AddChart from './components/AddChart';
import ChartControls from './components/ChartControls';

const chartDataSelector = (state) => {
  return {
    activeCharts: state.activeCharts,
    chartColours: state.chartColours,
    chartPoints: state.chartPoints,
  };
};

const getChartPoints = (name) => (data) => {
  return data[0][name];
};

const App = () => {
  const { activeCharts, chartColours, chartPoints } = useSelector(
    chartDataSelector
  );

  return (
    <>
      <h1>Dynamic charts</h1>
      <div className="app-container">
        <AddChart />

        <div>
          <ChartControls activeCharts={activeCharts} />
          <LineChart width={500} height={300} data={[chartPoints]}>
            <CartesianGrid />
            <XAxis />
            <YAxis />

            {Object.keys(chartPoints).map((chartName) => {
              return (
                <Line
                  dataKey={getChartPoints(chartName)}
                  stroke={chartColours[chartName]}
                  fill={chartColours[chartName]}
                />
              );
            })}
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default App;
