import styled from 'styled-components';

export const SelectContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1.25rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: regular;
  border: 1px solid ${({ theme }) => theme.primary};
  outline: none;
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  appearance: none;
  position: relative;
`;

export const SelectIcon = styled.figure`
  width: auto;
  position: absolute;
  top: 48%;
  right: 5%;
  font-size: 2rem;
  pointer-events: none;
  color: ${({ theme }) => theme.text};
`;