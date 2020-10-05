import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleChart } from '../store/actions';

const ChartControls = ({ names, activeStatus }) => {
  const dispatch = useDispatch();

  return (
    <div className="chart-controls">
      {names.map((name, idx) => (
        <label key={`label_${name}`}>
          <input
            type="checkbox"
            checked={activeStatus[idx]}
            onChange={(e) => {
              e.stopPropagation();
              dispatch(toggleChart(idx, e.target.checked));
            }}
          />
          {name}
        </label>
      ))}
    </div>
  );
};

export default ChartControls;
