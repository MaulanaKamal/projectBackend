import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios';

export default class Kategori extends Component {
  constructor(){
    super();
    this.state = { kategori : [] }
  }

  componentDidMount(){
    axios.get('http://localhost:3030/kategori/:id?')
    .then((get) => {
      // console.log(get);
      this.setState({ kategori : get.data })
      // console.log(this.state.kategori)
    })
  }
  
  render() {
    // const list = this.state.data.map((x,i) => {
    //   return (
    //     <li><Link className="nav" to = {"/kategori/" + x.id}>{x.season}</Link></li>
    //   )
    // })

    return (
        <div className="container">
            <div className="row">
                <div id="navigasi">
                    <ul>
                        <li>
                      {/* {list} */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}
