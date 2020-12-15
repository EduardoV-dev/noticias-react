import React from 'react';
import { TogglerContainer, Img } from '../styled_components/ModeToggler';
import light from '../assets/light.svg';
import dark from '../assets/dark.svg';

const ModeToggler = ({ theme, setTheme }) => {
  // Checks the actual theme in order to establish the toggler icon
  const icon = theme === 'light' ? dark : light;

  return (
    <TogglerContainer>
      <Img
        src={icon}
        alt='Mode Toggler'
        width={48}
        onClick={setTheme}
      />
    </TogglerContainer>
  );
}

export default ModeToggler;