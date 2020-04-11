import React from 'react';
import { withTheme } from '@/Context';


function HOCToggleThemeButton({ theme, toggleTheme }) {
  return (
    <button
      className={`button button--${theme}`}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}

export default withTheme(HOCToggleThemeButton);
