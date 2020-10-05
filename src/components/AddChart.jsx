import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initialiseChart } from '../store/action';

const AddChart = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [colour, setColour] = useState('#000000');

  return (
    <div>
      <h3>Add new chart</h3>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="color"
        value={colour}
        onChange={(e) => setColour(e.target.value)}
      />
      <input
        type="button"
        value="Add chart"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(initialiseChart(name, colour));
        }}
      />
    </div>
  );
};

export default AddChart;
