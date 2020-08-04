import React from 'react';


class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : this.props.name,
            clicked : this.props

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.props.click(!this.state.clicked, this.state.name) 
        this.setState({clicked : !this.state.clicked})
        
    }

    render() {
      return (
        <button onClick = {() => this.handleClick()}>{this.state.name}</button>

     
      );
    }
  }


export default Button;