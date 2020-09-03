import React, { Component } from 'react'
import '../CSS/style.css'
import '../js/app.js'


class FormConfirmation extends Component {
    render() {
        return (
            <div>
                <header class="header--form-page">
                    <nav class="container container--70">
                        <ul class="nav--actions">
                            <li class="logged-user">
                                Witaj Agata
                             <ul class="dropdown">
                                    <li><a href="#">Profil</a></li>
                                    <li><a href="#">Moje zbiórki</a></li>
                                    <li><a href="#">Wyloguj</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li><a href="index.html" class="btn btn--without-border active">Start</a></li>
                            <li><a href="index.html#steps" class="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="index.html#about-us" class="btn btn--without-border">O nas</a></li>
                            <li><a href="index.html#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="index.html#contact" class="btn btn--without-border">Kontakt</a></li>
                        </ul>
                    </nav>

                    <div class="slogan container container--90">
                        <h2>
                            Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
                            informacje o odbiorze.
                        </h2>
                    </div>
                </header>
            </div>
        )
    }
}
export default FormConfirmation;
