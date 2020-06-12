import React from 'react';
import './App.css';
import Todolist from './components/ToDoList';
import {Helmet} from 'react-helmet';


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
         <Helmet>
                <style>{'body { background-color: #282c34; }'}</style>
            </Helmet>
        <header className="App-header">
          <Todolist/>
        </header>
      </div>
    );
  }
}

export default App;