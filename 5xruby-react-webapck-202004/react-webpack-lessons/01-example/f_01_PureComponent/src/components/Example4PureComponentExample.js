import React from 'react';


export class Example4PropsRenderExample extends React.Component {
  render() {
    const { onClick, label } = this.props;
    return (
      <section>
        <h2>Example4 Component</h2>
        <button onClick={onClick}>Call</button>
        <h4>this.props.label:{label}</h4>
      </section>
    );
  }
}

export class Example4PropsRenderPureExample extends React.PureComponent {
  render() {
    const { onClick, label } = this.props;
    return (
      <section className="style-pure">
        <h2>Example4 Component</h2>
        <button onClick={onClick}>Call</button>
        <h4>this.props.label:{label}</h4>
      </section>
    );
  }
}
