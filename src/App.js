import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import AddChart from './components/AddChart';
import ChartControls from './components/ChartControls';

const chartDataSelector = (state) => {
  return {
    names: state.names,
    points: state.points,
    activeStatus: state.activeStatus,
    colours: state.colours,
  };
};

// Not too convinced about it
const formatPoints = (names, points) => {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let point = { index: i };
    names.forEach((name, idx) => {
      point[name] = points[idx][i];
    });
    result.push(point);
  }
  return result;
};

const App = () => {
  const { names, points, activeStatus, colours } = useSelector(
    chartDataSelector
  );

  return (
    <>
      <h1>Dynamic charts</h1>
      <div className="app-container">
        <AddChart />

        <div className="chart-container">
          <LineChart
            width={500}
            height={300}
            data={formatPoints(names, points)}
          >
            <CartesianGrid />
            <XAxis dataKey="index" />
            <YAxis />

            {names.map((name, idx) => {
              return (
                <Line
                  key={`chart_${name}`}
                  type="monotone"
                  // Switch isAnimationActive to true and observe the snake race
                  isAnimationActive={false}
                  dataKey={name}
                  stroke={colours[idx]}
                  fill={colours[idx]}
                />
              );
            })}
          </LineChart>

          <ChartControls names={names} activeStatus={activeStatus} />
        </div>
      </div>
    </>
  );
};

export default App;
