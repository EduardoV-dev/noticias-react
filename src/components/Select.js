import React from 'react';
import { Label, SelectInput, SelectContainer, SelectIcon } from '../styled_components/Select';

const Select = ({ labelText, name, input, setInput, values }) => {
  return (
    <SelectContainer>
      <Label>{labelText}</Label>
      <SelectInput
        name={name}
        onChange={setInput}
        value={input}
      >
        {values.map(value => (
          <option
            key={value.code}
            value={value.code}
          >{value.name}</option>
        ))}
      </SelectInput>
      <SelectIcon>
        <i className='bx bxs-chevron-down'></i>
      </SelectIcon>
    </SelectContainer>
  );
}

export default Select;