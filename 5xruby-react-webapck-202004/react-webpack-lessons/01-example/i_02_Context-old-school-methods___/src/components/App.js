
import React, { Component } from 'react';
import Context, { themes } from '@/Context';
import ThemeTogglerButton from '@/components/ToggleThemeButton';
import HOCToggleThemeButton from '@/components/HOCToggleThemeButton';

export default class App extends Component {
  /*
  這裡有 陷阱 !!!!!!!!
  https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAECCAO9oG8BQ1oQC5iwU2gF4V0NoA7MAWzwC5oByKgSxAGsWATZhgGlIyhmwNvSwALZhAB0QkaQC-pOWyLQAFAEpCAPjQYlGAGYB7E1v3QlSoA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015-loose&prettier=false&targets=&version=7.6.4&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,  // eslint-disable-line
  };
  */
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,  // eslint-disable-line
    };
  }

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'light' ? 'dark' : 'light',
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <div className={`app ${theme}`}>
        <Context.Provider value={this.state}>
          <h1>{theme}</h1>
          <ThemeTogglerButton />
          <HOCToggleThemeButton />
        </Context.Provider>
      </div>
    );
  }
}
