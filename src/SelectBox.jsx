import  { useState } from 'react';
import './App';

const SelectBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="select-container">
        <div className='input-label1'>
      <input
        type="text"
        list="options"
        value={value}
        onChange={handleChange}
        placeholder=""
        id="select-input"
        
      />
      <datalist id="options">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        
      </datalist>
      <label>ADULTS (18+)</label>
      </div>
    </div>
  );
};

export default SelectBox;
