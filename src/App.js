
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

import {
  HashRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";

export default class App extends Component {
pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
         
          <Routes>
              <Route exact path="/general" element ={<News  key="general" pagesize={this.pageSize} country={'in'} category={'general'}/>}></Route>
              <Route exact path="#/business" element ={<News  key="business"pagesize={this.pageSize} country={'in'} category={'business'}/>}></Route>
              <Route exact path="/health" element ={<News  key="health"pagesize={this.pageSize} country={'in'} category={'health'}/>}></Route>
              <Route exact path="/science"element ={ <News key="science" pagesize={this.pageSize} country={'in'} category={'science'}/>}></Route>
              <Route exact path="/sports" element ={<News  key="sports"pagesize={this.pageSize} country={'in'} category={'sports'}/>}></Route>
              <Route exact path="/technology"element ={ <News key="technology" pagesize={this.pageSize} country={'in'} category={'technology'}/>}></Route>
              <Route exact path="/entertainment" element ={<News key="entertainment" pagesize={this.pageSize} country={'in'} category={'entertainment'}/>}></Route>

         
          </Routes>
        
        </Router>
        <Footer></Footer>
      </div>
    )
  }
}

