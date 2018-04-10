import React, {Component} from 'react';
import './form.css'
import poster from './assets/Poster.png';


class Form extends Component {
    render() {
        return (   
            <div>
                <div className="poster">
                    <img alt="Gambar Poster" src={poster}/> 
                    <div className="translucent"></div>
                </div>
                <div className="form_container">
                    <div className="form_item">
                    <h3>You’re going to attend</h3>
                    </div>
                    <div className="form_item">
                    <h1>Jagongan Media Rakyat 2018 </h1>
                    </div>
                    <div className="form_item">
                    <p>Please please fill the form completely</p>
                    </div>

                    <form>
                        <label>
                            Name
                            <input type="text" name="name" defaultValue="Type your real name"/>
                        </label>
                        <label>
                            University
                            <input type="text" name="name" defaultValue="Type your university name"/>
                        </label>
                        <label>
                            Major
                            <input type="text" name="name" defaultValue="E.g. Computer Science"/>
                        </label>
                        <label>
                            Semester
                            <input type="text" name="name" defaultValue="E.g. Computer Science"/>
                        </label>
                        <label>
                            Phone Number
                            <input type="text" name="name" defaultValue="E.g. Computer Science"/>
                        </label>
                        <label> Your motivation
                        <textarea rows="4" cols= "50">
                        </textarea>
                        </label>
                        <label> Why should we select you to be part of this project?
                        <textarea rows="4" cols= "50">
                        </textarea>
                        </label>
                        <input className="submit_button" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        ); 
    }
}

export default Form