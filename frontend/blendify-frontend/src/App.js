import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlendifyNavbar from './components/Navbar.js';
import AllItems from './components/AllItems.js';
import AllButtons from './components/AllButtons.js';
import { ItemsContextProvider } from './context/ItemsContext';


class App extends React.Component {
    render() {
        return (<div className="App">
            <ItemsContextProvider>
                <BlendifyNavbar/>
                <AllItems/>
                <AllButtons/>
            </ItemsContextProvider>
        </div>)
    }
}
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <BlendifyNavbar/>
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
