import React, { Component } from 'react';

interface Props {
  count: number;
  onClick: ()=> void;
}

interface Data {
  name: string;
}

export default class MyComponent extends Component<Props, Data> {
  state = {
    name: 'milkmidi',
  }

  render() {
    return (
      <section>
        <h1>{this.state.name}</h1>
        <h2>{this.props.count}</h2>
        <button onClick={() => this.props.onClick()}>click</button>
      </section>
    );
  }
}
