import React from 'react';
import shallowEqual from '../utils/shallowEqual';


type TodoType = {
  id: number,
  name: string
}
interface Props {
}
interface State {
  list: TodoType[];
  count: number;
}

export default class ComponentExample extends React.Component<Props, State> {
  state = {
    count: 0,
    list: [
      { name: 'milkmidi', id: '0' },
    ],
  };

  shouldComponentUpdate(nextProps:Props, nextState:State) {
    console.log('-- shouldComponentUpdate --');
    console.log('this.state', this.state);
    console.log('nextState', nextState);
    console.log('isEqual', this.state.list === nextState.list);
    // shallowEqual 只會比對 Object 第一層，像 list Array 裡的物件就不比對
    return !shallowEqual(this.state, nextState);
  }

  // PureComponent 新增以下這段語法,
  // 會自動幫你做一層 shallowEqual 判斷優化
  /*
  shouldComponentUpdate(nextProps:Props, nextState:State) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }
  */

  clickHandler = () => {
    console.log('click');
    // bad，這是錯誤的寫法
    // 丟到 Component shouldComponentUpdate 比對
    // this.state.list 和 nextState.list 會拿到同一個記憶體空間位置物件。
    // shallowEqual 就會認為沒有更新
    const { list } = this.state;
    const value = Date.now().toString();
    list.push({ name: value, id: value });
    this.setState({
      list,
      count: +new Date(),
    });
  }

  clickGoodHandler = () => {
    console.log('clickGoodHandler');
    // 使用 concat 重製一份新的照參
    const list = this.state.list.concat();
    const value = Date.now().toString();
    list.push({ name: value, id: value });
    this.setState({
      list,
      count: +new Date(),
    });
  }


  render() {
    return (
      <section>
        <h2>Example2 Component</h2>
        <button onClick={this.clickHandler}>Add</button>
        <button onClick={this.clickGoodHandler}>clickGoodHandler</button>
        {
          this.state.list.map(({ name, id }) => <p key={id}>{name}</p>)
        }
      </section>
    );
  }
}
