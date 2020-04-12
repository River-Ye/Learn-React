// Array map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

class List extends React.Component {
  // TODO: 1 start
  /*
  state = {
    list: ['學會 JS', '學會 React', '年薪百萬']
  };
  addClick = () => {
    this.setState((state) => {
      return {
        list: state.list.concat(new Date().toString())
      }
    })
  }
  */
 state = {
   list: ['學會 JS', '學會 React', '年薪百萬']
 };
 addClick = () => {
   this.setState((state) => {
     return {
       list: state.list.concat(new Date().toString())
     }
   })
 }
  // TODO: 1 end
  render(){
    // TODO: 2 start
    /*
    return (
      <div>
        <button onClick={this.addClick}>Add</button>
        <ol className="list">
        {
          this.state.list.map(function (text) {
            return <li key={text}>{text}</li>;
          })
        }
        </ol>
      </div>
    )
    */
   return (
     <div>
       <button onClick={this.addClick}>Add</button>
       <ol className="list">
         {
           this.state.list.map(function (text) {
            //  要塞唯一key值
            return <li key={text}>{text}</li>;
           })
         }
       </ol>
     </div>
   )
    // TODO: 2 end
  }
}
ReactDOM.render(
  <List />,
  document.getElementById('app')
);