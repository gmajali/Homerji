import React from 'react';
import $ from 'jquery';


class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  output() {
    $.ajax({
      type: 'GET',
      url: '/logout',
      success: (data) => {
        console.log("logout")
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h4 onClick={this.output.bind(this)}> Logout </h4>
      </div>
    )
  }
}

export default Logout;