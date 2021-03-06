import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/logo.svg'
import bar from './assets/bar.svg'


class Header extends Component {

    burgerToggle(){
        let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
    }

    render(){
        return (
            <nav>
				<div className="navWide">
					<div className="wideDiv">
                        <a className="title"href="https://careerpad.id"><h2>CareerPad</h2></a>
						<NavLink to="/about" className="normal" activeClassName="active" exact>About</NavLink>
						<NavLink to="/mission" className="normal" activeClassName="active" exact>Mission</NavLink>
						<NavLink to="/founder" className="normal" activeClassName="active" exact>Founder</NavLink>
                        <NavLink to="/how-it-works" className="normal" activeClassName="active" exact>How It Works</NavLink>
					</div>
				</div>
				<div className="navNarrow">
				<div className="logo-mobile">
					<Link to="/">
						<img alt="CareerPad" src={logo}/>
					</Link>
				</div>
					<i onClick={this.burgerToggle}>
						<img src={bar} alt="bar"/>
					</i>
					<div className="narrowLinks">
                        <Link to="/about" onClick={this.burgerToggle}>About</Link>
                        <Link to="/mission" onClick={this.burgerToggle}>Mission</Link>
                        <Link to="/founder" onClick={this.burgerToggle}>Founder</Link>
                        <Link to="/how-it-works" onClick={this.burgerToggle}>How It Works</Link>
					</div>
				</div>
			</nav>
        );
    }
}

export default Header;