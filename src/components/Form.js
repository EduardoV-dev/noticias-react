import React from 'react';
import Select from './Select';
import { CountriesList, CategoriesList } from '../hooks/useInput';
import { FormContainer } from '../styled_components/Form';

const Form = ({ input, setInput }) => {

  const {country, category} = input;

  return (
    <FormContainer>
      <Select
        labelText='Pais:'
        name='country'
        input={country}
        setInput={setInput}
        values={CountriesList}
        />
      <Select
        labelText='Categoría:'
        name='category'
        input={category}
        setInput={setInput}
        values={CategoriesList}
      />
    </FormContainer>
  );
}

export default Form;