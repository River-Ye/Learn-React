import React, { useContext } from 'react';
import Context from '@/context/Context';

export default function ToggleThemeButton() {
  const { state, dispatch } = useContext(Context);
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <section data-name="ToggleThemeButton">
      <button
        type="button"
        className={`button ${state.theme}`}
        onClick={toggleTheme}
      >
    Toggle Theme
      </button>
    </section>
  );
}
