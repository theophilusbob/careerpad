import React, {Component} from 'react';
import './form.css'
import poster from './assets/Poster.png';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <div className="poster">
                    <img alt="Gambar Poster" src={poster}/> 
                    <div className="translucent"></div>
                </div>
            </div>
        ); 
    }
}

export default Form