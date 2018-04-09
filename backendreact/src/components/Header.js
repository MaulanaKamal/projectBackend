import React, { Component } from 'react';
import '../styles/Header.css'
import { Link, Route } from 'react-router-dom'
import axios from 'axios';

export default class Header extends Component {
  constructor(){
    super();
    this.state = { data : [] }
  }

  componentDidMount(){
    axios.get('http://localhost:3030/home')
    .then((get) => {
      // console.log(get);
      this.setState({ data : get.data })
      console.log(this.state.data)
    })
  }
  
  render() {
    const list = this.state.data.map((x,i) => {
      return (
        <li><Link className="nav" to = {"/kategori/" + x.id}>{x.season}</Link></li>
      )
    })

    return (
        <div className="container">
            <div className="row">
                <div id="navigasi">
                    <ul key="{x.id}">
                      {list}
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
