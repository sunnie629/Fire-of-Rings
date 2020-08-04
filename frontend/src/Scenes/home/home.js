import React from 'react';
import Button from '../Components/Button/Button.js'

class Homescreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked : false,
        }
        this.parentClick = this.parentClick.bind(this)
    }
    parentClick(clicked, name) {
       
        console.log(name + " " + clicked)
        
    }

    render() {
      return (
          <div>
               <h1>Hello, World {this.state.clicked}</h1>
                <Button click = {this.parentClick} name = "Start Game"/>
                <Button click = {this.parentClick}name = "Settings" />
          </div>
     
      );
    }
  }


export default Homescreen;