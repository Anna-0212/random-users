import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    person: null
  }

  async componentDidMount() {
    
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    //получаем доступ к нашей информации
    this.setState({person: data.results[0]})
    //пишем results[0], т.к. когда смотрим в console, то видим, что вся инфо находится как в яйце results -> 0 -> и т.д.
    console.log(data.results[0])
  }
  
//используем тернарный оператор, т.к. render у нас загружается сразу и если мы пропишем 
//<p>{this.state.person.name.first} </p>, то будет выдавать ошибку
// тернарный оператор будет говорить нам, что если еще не получена инфо, то покажи нам Loading...
  render() {
  return (
    <div className="App">
      {!this.state.person ? <p>Loading...</p> : 
      <div> 
        <p>First Name: {this.state.person.name.first} </p>
        <p>Last Name: {this.state.person.name.last} </p>
        <p>Email: {this.state.person.email} </p>
        <img src={this.state.person.picture.large} /> 
      </div>
      }
    </div>
  );
}
}

export default App;
