import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="container container--70">
                        <ul className="nav--actions">
                            <li><a href="/">Zaloguj</a></li>
                            <li className="highlighted"><a href="/">Załóż konto</a></li>
                        </ul>

                        <ul>
                            <li><a href="index.html" className="btn btn--without-border active">Start</a></li>
                            <li><a href="index.html#steps" className="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="index.html#about-us" className="btn btn--without-border">O nas</a></li>
                            <li><a href="index.html#help" className="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="index.html#contact" className="btn btn--without-border">Kontakt</a></li>
                        </ul>
                    </nav>
                </header>

                <section clclassNamess="login-page">
                    <h2>Zaloguj się</h2>
                    <form>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Hasło" />
                            <a href="/" class="btn btn--small btn--without-border reset-password">Przypomnij hasło</a>
                        </div>

                        <div className="form-group form-group--buttons">
                            <a href="/" className="btn btn--without-border">Załóż konto</a>
                            <button className="btn" type="submit">Zaloguj się</button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}
export default Login;