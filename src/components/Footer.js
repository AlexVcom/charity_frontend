import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                <div className="contact">
                    <h2>Skontaktuj się z nami</h2>
                    <h3>Formularz kontaktowy</h3>
                    <form className="form--contact">
                        <div className="form-group form-group--50"><input type="text" name="name" placeholder="Imię" /></div>
                        <div className="form-group form-group--50"><input type="text" name="surname" placeholder="Nazwisko" /></div>

                        <div className="form-group"><textarea name="message" placeholder="Wiadomość" rows="1"></textarea></div>

                        <button className="btn" type="submit">Wyślij</button>
                    </form>
                </div>
                <div className="bottom-line">
                    <span className="bottom-line--copy">Copyright & copy; 2018</span>
                    <div className="bottom-line--icons">
                        <a href="/" className="btn btn--small"> <img obcject="true" src={require('/Users/alex/PORTFOLIO_LAB/charity_frontend/src/images/icon-facebook.svg')} alt=""/> </a> <a href="/"
                            className="btn btn--small"> <img object="true" src={require('/Users/alex/PORTFOLIO_LAB/charity_frontend/src/images/icon-instagram.svg')} alt=""/></a>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
