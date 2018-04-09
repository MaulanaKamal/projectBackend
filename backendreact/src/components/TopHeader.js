import React, { Component } from 'react';
import '../styles/TopHeader.css'
import gambarkecil from '../images/john-small.png'



export default class TopHeader extends Component {
    constructor(){
        super();
        this.state = {data : ""}
    }

    add = (e) => {
        e.preventdefault
        this.setState({data : this.refs.nama.value });
        console.log(this.state.data)
    }
render() {

    return (
      <div className="top-header">
        {/* Header */}
        <div className="container">
            <div className="row">
                <div className="navbar-left">
                    <p className="logo"><i className="wifi icon"></i>Holiday.com</p>
                </div>
                <ul className="navbar-right">
                    <li className="login"><a href="">
                    <div className="ui horizontal list">
                        <div className="item">
                            <img className="ui mini circular image" src={gambarkecil} />
                            <div className="content">
                            <div className="ui sub header"></div>
                            {this.state.data}
                            </div>
                        </div>
                    </div>
                    </a></li> 
                    <li className="dropdown register">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign In<span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>    
                                <div className="col-xs-12">
                                    <form className="form" role="form" action="login">
                                        <div className="form-group registerhalaman">
                                            <label htmlFor="username"></label>
                                            <input type="text" className="form-control" id="username" placeholder="Username" ref="nama" />
                                        </div>
                                        <div className="form-group registerhalaman">
                                            <label htmlFor="password"></label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                    </form>
                                    <div className="form-group registerhalaman">
                                        <br/>
                                        <button type="submit" className="btn btn-primary btn-block" onClick={this.add}>Masuk</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language<span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href=""><i className="gb eng flag"></i>English</a></li>
                            <li><a href=""><i className="id flag"></i>Bahasa Indonesia</a></li>
                            <li><a href=""><i className="france flag"></i>France</a></li>
                            <li><a href=""><i className="es flag"></i>Spain</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
}
