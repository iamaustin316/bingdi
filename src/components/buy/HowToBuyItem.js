import React, { Component } from 'react';

class HowToBuyItems extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <HowToBuyItem>
        <img src={this.props.icon} alt=""/>
        <h3>零售</h3>
        <p>零售</p>
      </HowToBuyItem>
    );
  }
}
 
export default HowToBuyItems;