import React, { Component } from 'react';

class Wines extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
         }
    }

    // {`url.com/winey/${response.id}`} <--- this is what api url should be to target specific id
    render() { 
        return (
            <div>
                <h1> Hello World </h1>
            </div>
          );
    }
}
 
export default Wines;