import React, { Component, MouseEvent } from 'react';
import CityAreaData from '@/data/CityAreaData.json';

const cities:string[] = Object.keys(CityAreaData);

type AreaType = {
  name: string;
  zip: string;
}
interface State {
  cityIdx: number;
  areaIdx: number;
}

export default class RegionSelect extends Component<void, State> {
  // TODO: 1
  state = {
    cityIdx: 0,
    areaIdx: 0,
  }

  // TODO: 2
  onChangeCity = (e:MouseEvent<HTMLButtonElement>) => {
    this.setState({
      cityIdx: e.target.value,
      areaIdx: 0,
    });
  }

  onChangeArea = (e:MouseEvent<HTMLButtonElement>) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }

  reset = () => {
    this.setState({
      cityIdx: 0,
      areaIdx: 0,
    });
  }

  render() {
    // TODO: 3
    const { cityIdx, areaIdx } = this.state;
    const currentCityName:string = cities[cityIdx];
    const areasInCity:AreaType[] = CityAreaData[currentCityName];
    const { zip } = areasInCity[areaIdx];
    return (
      <div className="container">
        <h2>cityIdx:{cityIdx}, areaIdx: {areaIdx}, currentCityName: {currentCityName}</h2>
        <div>
          <label>縣市</label>
          <select value={cityIdx} onChange={this.onChangeCity}>
            { cities.map((name, idx) => <option value={idx} key={name}>{name}</option>) }
          </select>
        </div>
        <div>
          <label>地區</label>
          <select value={areaIdx} onChange={this.onChangeArea}>
            { areasInCity.map(({ name }, idx) => <option value={idx} key={name}>{name}</option>) }
          </select>
        </div>
        <div>
          <label>zip</label>
          <input type="text" readOnly value={zip} />
        </div>
        <button onClick={this.reset} type="button">Reset</button>
      </div>
    );
  }
}
