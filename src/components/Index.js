import React, { Component } from 'react'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            info: []
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
       fetch('http://localhost:8080/api/institution')
          .then(response => response.json())
          .then(data => this.setState({ item: data}));

        fetch('http://localhost:8080/api/donations')
          .then(response => response.json())
          .then(data => this.setState({ info: data}));


        }


    render() {
        const{item, info}=this.state;
        return <>
            <div>
                <header className="header--main-page">
                    <nav className="container container--70">
                        <ul className="nav--actions">
                            <li><a href="/login" className="btn btn--small btn--without-border">Zaloguj</a></li>
                            <li><a href="/registration" className="btn btn--small btn--highlighted">Załóż konto</a></li>
                        </ul>

                        <ul>
                            <li><a href="/" className="btn btn--without-border active">Start</a></li>
                            <li><a href="#steps" className="btn btn--without-border">O co chodzi?</a></li>
                            <li><a href="#about-us" className="btn btn--without-border">O nas</a></li>
                            <li><a href="#help" className="btn btn--without-border">Fundacje i organizacje</a></li>
                            <li><a href="/test" className="btn btn--without-border">Przekaż dary</a></li>
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

                 <section id="stats" className="stats">
                    
            
                     <div className="container container--85">
                        <div className="stats--item">
                            <em>{info.donationSumQuantity}</em>
                            <h3>Oddanych worków</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est beatae, quod accusamus illum tempora!</p>
                        </div>

                        <div className="stats--item">
                        <em>{info.donationCounter}</em>
                            <h3>Przekazanych darów</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magnam, sint nihil cupiditate quas quam.</p>
                        </div>
                    </div>
                      
                </section>

                <section id="steps" className="steps">
                    <h2>Wystarczą 4 proste kroki</h2>

                    <div className="steps--container">
                        <div className="steps--item">
                            <span className="icon icon--hands"></span>
                            <h3>Wybierz rzeczy</h3>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                        <div className="steps--item">
                            <span className="icon icon--arrow"></span>
                            <h3>Spakuj je</h3>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="steps--item">
                            <span className="icon icon--glasses"></span>
                            <h3>Zdecyduj komu chcesz pomóc</h3>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div className="steps--item">
                            <span className="icon icon--courier"></span>
                            <h3>Zamów kuriera</h3>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>

                    <a href="/" className="btn btn--large">Załóż konto</a>
                </section>

                <div id="about-us" className="about-us">
                    <div className="about-us--text">
                        <h2>O nas</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vitae animi rem pariatur incidunt libero optio esse quisquam illo omnis.</p>
                        <img className="about-us--text-signature" object="true" src={require('/Users/alex/PORTFOLIO_LAB/charity_frontend/src/images/signature.svg')} alt="Signature" />
                    </div>
                    <div className="about-us--image"><img object="true" src={require('/Users/alex/PORTFOLIO_LAB/charity_frontend/src/images/about-us.jpg')} alt="People in circle" /></div>
                </div>


                <section id="help" className="help">
                    <h2>Komu pomagamy?</h2>

                    {/* <!-- SLIDE 1 --> */}
               
                     <div className="help--slides active" data-id="1">
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                             Możesz sprawdzić czym się zajmują.</p>

                            {/* // left table / rigt  */}
                            <div className="help--slides-active" >
                             {item.map((value, index) =>{ 
                                return <>
                             <ul className="help--slides-items">
                                <li>
                                <div className="col">
                                    <div key={index} className="title">Fundacja "{value.name}"</div>
                                    <div  className="subtitle">Cel i misja: {value.description}.</div>
                                </div>
                            </li>
                        </ul>
                             </>
                          })} 
                          </div>
                    </div>
                    
                </section>
            </div>
        </>
    }
}
export default Home;
