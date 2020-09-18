import React, { Component } from 'react'
// import '../CSS/style.css'
// import '../js/app.js'


class Header extends Component {
    render() {
        return (
            <div>
                <header className="header--main-page">
                    <nav className="container container--70">
                        <ul className="nav--actions">
                            <li><a href="/" className="btn btn--small btn--without-border">Zaloguj</a></li>
                            <li><a href="/" className="btn btn--small btn--highlighted">Załóż konto</a></li>
                        </ul>

                        <ul>
                            <li><a href="/" className="btn btn--without-border active">Start</a></li>
                            <li><a href="#steps" className="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="#about-us" className="btn btn--without-border">O nas</a></li>
                            <li><a href="#help" className="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="/form" className="btn btn--without-border">Przekaż dary</a></li>
                            <li><a href="#contact" className="btn btn--without-border">Kontakt</a></li>
                        </ul>
                        </nav>

                    <div className="slogan container container--90">
                        <div className="slogan--item">
                            <h1>
                                Zacznij pomagać!<br />
                                Oddaj niechciane rzeczy w zaufane ręce
                             </h1>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header;