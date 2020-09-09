import React, { Component } from 'react'
// import '../CSS/style.css'
// import '../js/app.js'


class Header extends Component {
    render() {
        return (
            <div>
                <header class="header--main-page">
                    <nav class="container container--70">
                        <ul class="nav--actions">
                            <li><a href="" class="btn btn--small btn--without-border">Zaloguj</a></li>
                            <li><a href="#" class="btn btn--small btn--highlighted">Załóż konto</a></li>
                        </ul>

                        <ul>
                            <li><a href="" class="btn btn--without-border active">Start</a></li>
                            <li><a href="#steps" class="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="#about-us" class="btn btn--without-border">O nas</a></li>
                            <li><a href="#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="/form" class="btn btn--without-border">Przekaż dary</a></li>
                            <li><a href="#contact" class="btn btn--without-border">Kontakt</a></li>
                        </ul>
                        </nav>

                    <div class="slogan container container--90">
                        <div class="slogan--item">
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