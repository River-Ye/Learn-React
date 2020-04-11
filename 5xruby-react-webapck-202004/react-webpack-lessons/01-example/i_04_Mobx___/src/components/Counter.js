import { inject, observer } from 'mobx-react';
import React from 'react';

@inject('count')
@inject('todo')
@observer
class Counter extends React.Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    const { count } = this.props;
    return (
      <section data-name="Counter">
        <h2>
          CountStore.number:
          {count.number}
        </h2>
        <button onClick={count.onIncrement}>increment</button>
        <button onClick={count.onDecrement}>decrement</button>
        <button onClick={() => { count.number += 2; }}>+2</button>
      </section>
    );
  }
}

export default Counter;
