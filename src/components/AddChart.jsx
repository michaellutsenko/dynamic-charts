import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddChart = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [colour, setColour] = useState('');

  return (
    <div>
      <h3>Add new chart</h3>
      <input type="text" value={name} placeholder="name" />
      <input type="color" />
      <input type="button" value="Add chart" />
    </div>
  );
};

export default AddChart;
