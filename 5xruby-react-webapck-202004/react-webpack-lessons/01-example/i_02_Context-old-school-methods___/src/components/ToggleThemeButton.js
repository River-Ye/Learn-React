import React from 'react';
import Context from '@/Context';


function ThemeTogglerButton() {
  return (
    <Context.Consumer>
      {
        ({ theme, toggleTheme }) => (
          <button
            className={`button button--${theme}`}
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        )
      }
    </Context.Consumer>
  );
}

export default ThemeTogglerButton;
