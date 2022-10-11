
import React, {Component} from 'react';
import './App.css';
import Register from './Components/Register';
import Greeting from './Components/Greeting';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass: false,
    };
  }
  registrationHnadler=(event)=>{
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({name,email,password, isRegistered: true})
    event.preventDefault();

  };
  showPasswordHandler = () =>{
    this.setState({showPass: !this.state.showPass})
  }

  render(){
    return (
      <div>
        {this.state.isRegistered ? <Greeting name={this.state.name} 
        email={this.state.email}></Greeting> : <Register submit = {this.registrationHnadler} 
        showPass = {this.state.showPass}
        click={this.showPasswordHandler}></Register>}
      </div>
    )
  }
}




export default App; 
