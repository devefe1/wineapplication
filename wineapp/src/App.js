import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Wines from './components/Wines';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
     }
  }

async componentDidMount() {
  const response = await axios.get('http://myapi-profstream.herokuapp.com/api/6e7ed8/wines')
  this.setState({data: response.data})
  console.log(response.data)
}

  render() { 
    return (
      <Router>
      <div className='App' >
        <Switch>
        <Route path='/wines:id' exact component={Wines} />
        </Switch>
        {this.state.data.map(wine => (
         <Link to={`/wines/${wine.id}`} > <h1 key={wine.id} > {wine.name} </h1> </Link>
        ))}
      </div>
      </Router>
     );
  }
}
 
export default App;