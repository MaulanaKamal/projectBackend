import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Kategori from './components/Kategori'

export default class App extends Component {
  // state = {
  //   data: []
  // }

  // post(obj) {
  //   axios.post('http://localhost:3030/post', { 
  //     name: obj.name.value, 
  //     phonenumber: obj.phonenumber.value
  //   })
  //   .then(function(response){
  //     console.log('saved successfully')
  //   });
  // }

  render(){
    // axios.get('http://localhost:3030/season')
    // .then((ambilData) => {
    //   console.log(ambilData.data);
    //   this.setState({ data: ambilData.data })
    // })
    

    return (
      <div>
        {/* HEADER-FIXED */}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <TopHeader/> 
            <Header/>
          </div>
        </nav>
        <div className="container">
          {/* <Route path = "/kategori/:id" render = {({match}) => <ReadMore {...katalog.find(x => x.id == match.params.id )} />} /> */}
          {/* <Kategori/> */}
        </div>
        {/* <center>
          <input type="text" ref="name" placeholder="Name"/><br/>
          <input type="text" ref="phonenumber" placeholder="Phone Number"/><br/>
          <input type="submit" onClick={() => this.post(this.refs)} value="Submit"/><br/>
        </center> */}
      </div>
    );
  }
}
