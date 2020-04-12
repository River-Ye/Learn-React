class Card extends React.Component {
  // TODO: 1 start
  /*
  render() {
    return (
      <div className="card">
        <img className="img" src={this.props.img} />
        <div className="name">{this.props.name}</div>
        <div className="quote">{this.props.children}</div>
      </div>
    );
  }
  */
 render(){
   return (
    <div className="card">
      <img className="img" src={this.props.img} />
      <div className="name">{this.props.name}</div>
      <div className="quote">{this.props.children}</div>
    </div>
   );
 }
  // TODO: 1 end
}

function FunctionalCard(props){
  // TODO: 2 start
  /*
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  */
  return (
    <div className="card">
      <img className="img" src={props.img} />
      <div className="name">{props.name}</div>
      <div className="quote">{props.children}</div>
    </div>
  );
  // TODO: 2 end
}



ReactDOM.render(
  // TODO:3 start
  /*
  <div>
    <Card 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" />
    <Card 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component">
      <h1>這裡可以放 children </h1>
    </Card>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/00ff00/?text=functional"
      name="functional"/>
  </div>
  */
  // TODO: 3 end
  <div>
    <Card 
      img="http://fakeimg.pl/200x80/?text=milkmidi"
      name="Component" />
    <Card 
      img="http://fakeimg.pl/200x80/ff0000/?text=pipi"
      name="Component">
      <h1>這裡可以放 children </h1>
    </Card>
    <FunctionalCard 
      img="http://fakeimg.pl/200x80/00ff00/?text=functional"
      name="functional"/>
  </div>
  ,
  document.getElementById('app')
);