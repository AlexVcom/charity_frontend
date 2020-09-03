import React, { Component } from 'react'
import '../CSS/style.css'
import '../js/app.js'

class Registration extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="container container--70">
                        <ul class="nav--actions">
                            <li><a href="#">Zaloguj</a></li>
                            <li class="highlighted"><a href="#">Załóż konto</a></li>
                        </ul>

                        <ul>
                            <li><a href="index.html" class="btn btn--without-border active">Start</a></li>
                            <li><a href="index.html#steps" class="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="index.html#about-us" class="btn btn--without-border">O nas</a></li>
                            <li><a href="index.html#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="index.html#contact" class="btn btn--without-border">Kontakt</a></li>
                        </ul>
                    </nav>
                </header>

                <section class="login-page">
                    <h2>Załóż konto</h2>
                    <form>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" placeholder="Hasło" />
                        </div>
                        <div class="form-group">
                            <input type="password" name="password2" placeholder="Powtórz hasło" />
                        </div>

                        <div class="form-group form-group--buttons">
                            <a href="login.html" class="btn btn--without-border">Zaloguj się</a>
                            <button class="btn" type="submit">Załóż konto</button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}
export default Registration;