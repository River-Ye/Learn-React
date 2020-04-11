import React, { PureComponent } from 'react';

// https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js#L39
// shallowEqual source Code
// https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberClassComponent.js#L255-L293
// PureComponent shouldComponentUpdate source Code
export default class PureComponentExample extends PureComponent {
  state = {
    list: [
      { name: 'milkmidi', id: 0 },
    ],
  };

  clickHandler = () => {
    const { list } = this.state;
    const value = Date.now().toString();
    list.push({ name: value, id: value });
    this.setState({ list });
  }

  clickGoodHandler = () => {
    // 正確解法，要產生一個新的參照物件
    const list = this.state.list.concat();
    const value = Date.now().toString();
    list.push({ name: value, id: value });
    this.setState({ list });
  }

  render() {
    return (
      <section className="style-pure">
        <h2>Example3 PureComponent</h2>
        <button onClick={this.clickHandler}>Add</button>
        <button onClick={this.clickGoodHandler}>clickGoodHandler</button>
        {
          this.state.list.map(({ name, id }) => <p key={id}>{name}</p>)
        }
      </section>
    );
  }
}
