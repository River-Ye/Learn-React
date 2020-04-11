import { observable, action, computed } from 'mobx';

class CountStore {
  @observable number = 0;

  @computed get getDoubleCount() {
    return this.number * 2;
  }


  @action.bound onIncrement() {
    this.number = this.number + 1;
  }

  @action.bound onDecrement() {
    this.number = this.number - 1;
  }

  changeNumber() {
    this.number += 1;
  }
}
export default CountStore;
