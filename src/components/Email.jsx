import React, { Component } from 'react';
import Header from './Header'
export default class Email extends Component {

  constructor() {
    super();
    this.state = {
      size: '580'
    }
  }

  render() {
    return(
      <table cellPadding="0" cellSpacing="0" id="backgroundTable">
        <tr>
          <td>
            <center>
              <table cellPadding="0" cellSpacing="0" width={this.state.size}>
                <tr>
                  <td>
                    <Header />
                  </td>
                </tr>
              </table>
            </center>            
          </td>
        </tr>
      </table>
    );
  }
}