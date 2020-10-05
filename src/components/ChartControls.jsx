import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleChart } from '../store/actions';

const ChartControls = ({ activeCharts }) => {
  const dispatch = useDispatch();
  return (
    <div className="chart-controls">
      {Object.keys(activeCharts).map((chartName) => (
        <label>
          <input
            type="checkbox"
            value={activeCharts[chartName]}
            onChange={(e) => {
              e.stopPropagation();
              dispatch(toggleChart(chartName, e.target.value));
            }}
          />
          {chartName}
        </label>
      ))}
    </div>
  );
};

export default ChartControls;
