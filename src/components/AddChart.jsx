import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { initialiseChart } from '../store/actions';

const AddChart = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [colour, setColour] = useState('#000000');

  return (
    <div className="add-chart">
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
          if (!name) {
            alert('Chart must have a name');
          }
          dispatch(initialiseChart(name, colour));
          // Reset the fields to default
          setName('');
          setColour('#000000');
        }}
      />
    </div>
  );
};

export default AddChart;
