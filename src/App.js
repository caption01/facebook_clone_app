import React from 'react';
import BackGround from './ิbackground/BackGround.js'
import NavbarHead from './navbar/Navbar.js'
import Registor from './registor/Registor.js'
import './App.css'
import {} from 'react-bootstrap'

class App extends React.Component { 

  constructor(){
    super()
    this.state = {
      route: 'home',
      statusLogIn: false,
      users: [],
      post: []
    }
  }

  loadIntialPost = () => {
    fetch('http://localhost:3000/post')
    .then(res => res.json())
    .then(res => {
      this.setState({post: res})
      console.log(res)
    })
    .catch(err => console.log('cant load intial posts from DB'))
  }

  handleLonIn = () => {
    this.setState({
      statusLogIn: true
    })
  }

  handleLogOut = () => {
    this.setState({
      statusLogIn: false
    })
  }

  componentDidMount(){
    this.loadIntialPost()
  }

  render(){
    return(
      <div className='App'>
          <BackGround />
          <NavbarHead statusLogIn={this.state.statusLogIn} handleLogOut={this.handleLogOut} handleLonIn={this.handleLonIn} />
          {!this.state.statusLogIn && <Registor />}
      </div>
    )
  }


}

export default App;
