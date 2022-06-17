
import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'


import './App.css';
import './normalize.css';


class App extends React.Component{
  constructor(props){
    super(props);
  }

    render(){
      return (
        <div className="wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
    )
  }
}

export default App;