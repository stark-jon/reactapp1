import   './App.css' 
//class , function 
import Header from './Header'
import Footer from './Footer'
import React, {Component} from 'react'
 
class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    empname: "Ram",
    desg:"SE",
   value: ''
  }
 
   this.handleChange = this.handleChange.bind(this);
 
   this.handleSubmit = this.handleSubmit.bind(this);
 
  }
 
  handleChange(event) {
    this.setState({value: event.target.value}); //this.setState()
  }
 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    var prod1={ id:"101",name:"Bag",price:"99"};
    return (
    <div className="App">
         <div>
               <Header/>
         </div>
         <h1> Welcome to React 16 Prorgamming- Class Component  </h1>
         <h1> emp State : {this.state.empname}    {this.state.desg} </h1>
        
 
      <div> <Footer  prod={prod1}/></div>
      <div>{ this.state.value} </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
 
    </div>
 
    );
 
  }
}
export default App;
 
/*
function App() {
  //JSX
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <h1> Welcome to React 16 Prorgamming </h1>
 
      <div> <Footer/></div>
    </div>
  );
}
 
export default App;
 
*/