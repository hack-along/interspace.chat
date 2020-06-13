import React, { Component } from "react";
import ReactDOM from "react-dom";
import Box from '3box';
import Web3 from 'web3'

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
    const web3 = new Web3(Web3.givenProvider);
  }

  async componentDidMount() {
    const box = await Box.create(window.ethereum)
    const address =  window.ethereum.address;
    const spaces = [ 'space1', 'space2', 'space3']
    await box.auth(spaces, { address })
    await box.openSpace('space1')
     }
  

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li> 
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;