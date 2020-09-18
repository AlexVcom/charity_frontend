import React, { Component } from 'react'
import Alert from './RegestrationAlert.js'


class TEST extends Component {
  state = {
    startDate: new Date()
  };


  constructor(props, form) {
    super(props);
    this.registrationAlert = React.createRef();
    this.state = {
      item: [],
      catItem: [],
    };
  }
 


  componentDidMount() {
    fetch('http://localhost:8080/api/institution')
      .then(response => response.json())
      .then(data => this.setState({ item: data }));

    fetch('http://localhost:8080/api/category')
      .then(response => response.json())
      .then(data => this.setState({ catItem: data }));

  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    this.registerDonation(
      event.target.quantity.value,
      event.target.categoriesId.value,
      event.target.institutionId.value,
      event.target.street.value,
      event.target.city.value,
      event.target.zipCode.value,
      event.target.pickupDate.value,
      event.target.pickUpComment.value,
    );
  }

  registerDonation(
    quantity,
    description, // todo pozmieniać nazwe 
    institutionId,
    street,
    city,
    zipCode,
    pickupDate,
    pickupTime,
    pickUpComment,
  ) {

    fetch('http://localhost:8080/api/donations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
        categoriesId: description,
        institutionId: institutionId,
        street: street,
        city: city,
        zipCode: zipCode,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        pickUpComment: pickUpComment,

      })
    })
      .then(function (response) {
        if (response.status === 200) {
          this.showRegistrationAlert("success", "Donation registered!");
        } else if (response.status === 422) {
          this.showRegistrationAlert("danger", "Donation already exists");
        } else {
          this.showRegistrationAlert("danger", "Donation not registered!", "Something went wrong.");
        }
      }.bind(this)).catch(function (error) {
        this.showRegistrationAlert("danger", "Error", "Something went wrong.");
      }.bind(this));
  }
  showRegistrationAlert(variant, heading, message) {
    this.registrationAlert.current.setVariant(variant);
    this.registrationAlert.current.setHeading(heading);
    this.registrationAlert.current.setMessage(message);
    this.registrationAlert.current.setVisible(true);
  }


  //  FUNC - ~
    function() {

    /**
     * Form Select
     */
    class FormSelect {
      constructor($el) {
        this.$el = $el;
        this.options = [...$el.children];
        this.init();
      }
  
      init() {
        this.createElements();
        this.addEvents();
        this.$el.parentElement.removeChild(this.$el);
      }
  
      createElements() {
        // Input for value
        this.valueInput = document.createElement("input");
        this.valueInput.type = "text";
        this.valueInput.name = this.$el.name;
  
        // Dropdown container
        this.dropdown = document.createElement("div");
        this.dropdown.classList.add("dropdown");
  
        // List container
        this.ul = document.createElement("ul");
  
        // All list options
        this.options.forEach((el, i) => {
          const li = document.createElement("li");
          li.dataset.value = el.value;
          li.innerText = el.innerText;
  
          if (i === 0) {
            // First clickable option
            this.current = document.createElement("div");
            this.current.innerText = el.innerText;
            this.dropdown.appendChild(this.current);
            this.valueInput.value = el.value;
            li.classList.add("selected");
          }
  
          this.ul.appendChild(li);
        });
  
        this.dropdown.appendChild(this.ul);
        this.dropdown.appendChild(this.valueInput);
        this.$el.parentElement.appendChild(this.dropdown);
      }
  
      addEvents() {
        this.dropdown.addEventListener("click", e => {
          const target = e.target;
          this.dropdown.classList.toggle("selecting");
  
          // Save new value only when clicked on li
          if (target.tagName === "LI") {
            this.valueInput.value = target.dataset.value;
            this.current.innerText = target.innerText;
          }
        });
      }
    }
    document.querySelectorAll(".form-group--dropdown select").forEach(el => {
      new FormSelect(el);
    });
  
    /**
     * Hide elements when clicked on document
     */
    document.addEventListener("click", function(e) {
      const target = e.target;
      const tagName = target.tagName;
  
      if (target.classList.contains("dropdown")) return false;
  
      if (tagName === "LI" && target.parentElement.parentElement.classList.contains("dropdown")) {
        return false;
      }
  
      if (tagName === "DIV" && target.parentElement.classList.contains("dropdown")) {
        return false;
      }
  
      document.querySelectorAll(".form-group--dropdown .dropdown").forEach(el => {
        el.classList.remove("selecting");
      });
    });
  
    /**
     * Switching between form steps
     */
    class FormSteps {
      constructor(form) {
        this.$form = form;
        this.$next = form.querySelectorAll(".next-step");
        this.$prev = form.querySelectorAll(".prev-step");
        this.$step = form.querySelector(".form--steps-counter span");
        this.currentStep = 1;
  
        this.$stepInstructions = form.querySelectorAll(".form--steps-instructions p");
        const $stepForms = form.querySelectorAll("form > div");
        this.slides = [...this.$stepInstructions, ...$stepForms];
  
        this.init();
      }
  
      /**
       * Init all methods
       */
      init() {
        this.events();
        this.updateForm();
      }
  
      /**
       * All events that are happening in form
       */
      events() {
        // Next step
        this.$next.forEach(btn => {
          btn.addEventListener("click", e => {
            e.preventDefault();
            this.currentStep++;
            this.updateForm();
          });
        });
  
        // Previous step
        this.$prev.forEach(btn => {
          btn.addEventListener("click", e => {
            e.preventDefault();
            this.currentStep--;
            this.updateForm();
          });
        });
  
        // Form submit
        this.$form.querySelector("form").addEventListener("submit", e => this.submit(e));
      }
  
      /**
       * Update form front-end
       * Show next or previous section etc.
       */
      updateForm() {
        this.$step.innerText = this.currentStep;
  
        // TODO: Validation
  
  
        this.slides.forEach(slide => {
          slide.classList.remove("active");
          if (slide.dataset.step === this.currentStep) {
            slide.classList.add("active");
          }
        });
  
        this.$stepInstructions[0].parentElement.parentElement.hidden = this.currentStep >= 5;
        this.$step.parentElement.hidden = this.currentStep >= 5;
        // TODO: get data from inputs and show them in summary
      }
  
    }
    const form = document.querySelector(".form--steps");
    if (form !== null) {
      new FormSteps(form);
    }
  };
  



  render() {
    const { item, catItem } = this.state;
    return (
      <>
        <header className="header--form-page">
          <nav className="container container--70">
            <ul className="nav--actions">
              <li className="logged-user">
                Witaj Agata
            <ul className="dropdown">
                  <li><a href="/">Profil</a></li>
                  <li><a href="/">Moje zbiórki</a></li>
                  <li><a href="/">Wyloguj</a></li>
                </ul>
              </li>
            </ul>

            <ul>
              <li><a href="index.html" className="btn btn--without-border active">Start</a></li>
              <li><a href="index.html#steps" className="btn btn--without-border">O co chodzi?</a></li>
              <li><a href="index.html#about-us" className="btn btn--without-border">O nas</a></li>
              <li><a href="index.html#help" className="btn btn--without-border">Fundacje i organizacje</a></li>
              <li><a href="index.html#contact" className="btn btn--without-border">Kontakt</a></li>
            </ul>
          </nav>

          <div className="slogan container container--90">
            <div className="slogan--item">
              <h1>
                Oddaj rzeczy, których już nie chcesz<br />
                <span className="uppercase">potrzebującym</span>
              </h1>

              <div className="slogan--steps">
                <div className="slogan--steps-title">Wystarczą 4 proste kroki:</div>
                <ul className="slogan--steps-boxes">
                  <li>
                    <div><em>1</em><span>Wybierz rzeczy</span></div>
                  </li>
                  <li>
                    <div><em>2</em><span>Spakuj je w worki</span></div>
                  </li>
                  <li>
                    <div><em>3</em><span>Wybierz fundację</span></div>
                  </li>
                  <li>
                    <div><em>4</em><span>Zamów kuriera</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <section className="form--steps">
          <div className="form--steps-instructions">
            <div className="form--steps-container">
              <h3>Ważne!</h3>
              <p data-step="1" className="active">
                Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                wiedzieć komu najlepiej je przekazać.
                                 </p>
              <p data-step="2">
                Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
                wiedzieć komu najlepiej je przekazać.
                                </p>
              <p data-step="3">
                Wybierz jedną, do
                której trafi Twoja przesyłka.
                                </p>
              <p data-step="4">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
          </div>

          <div className="form--steps-container">
            <div className="form--steps-counter">Krok <span>1</span>/4</div>
            <form onSubmit={this.handleSubmit} action="form-confirmation.html" method="post">

              {/* STEP 1 */}
              <div data-step="1" className="active">
                <h3>Zaznacz co chcesz oddać:</h3>
                {catItem.map((value, index) => {
                  return <>

                    <div className="form-group form-group--checkbox">
                      <label>
                        <input type="checkbox" name="categories" value="clothes-to-use"/>
                        <span className="checkbox"></span>
                        <span controlId="description" className="description" key={index}> {value.name}</span>
                      </label>
                    </div>
                  </>
                })}
                 <div className="form-group form-group--buttons">
                  <button type="button" className="btn next-step">Dalej</button>
                </div>
              </div>

              {/* STEP 2  */}
              <div data-step="2">
                <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

                <div className="form-group form-group--inline">
                  <label>
                    Liczba 60l worków:
                <input controlId="quantity" type="number" name="bags" step="1" min="1" />
                  </label>
                </div>

                <div className="form-group form-group--buttons">
                  <button type="button" className="btn prev-step">Wstecz</button>
                  <button type="button" className="btn next-step">Dalej</button>
                </div>
              </div>

              {/* STEP 3 */}
              <div data-step="3">
                <h3>Wybierz organizacje, której chcesz pomóc:</h3>
                {item.map((value, index) => {
                  return <>
                    <div className="form-group form-group--checkbox">
                      <label>
                        <input type="radio" name="organization" value={index.id} />
                        <span className="checkbox radio"></span>
                        <span className="description">
                          <div controlId="institutionId" key={index} className="title">Fundacja {value.name}</div>
                          <div className="subtitle">
                            Cel i misja: {value.description}
                          </div>
                        </span>
                      </label>
                    </div>

                    <div className="form-group form-group--buttons">
                      <button type="button" className="btn prev-step">Wstecz</button>
                      <button type="button" className="btn next-step">Dalej</button>
                    </div>
                  </>
                })}
              </div>

              {/* STEP 4 */}
              <div data-step="4">
                <h3>Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>

                <div className="form-section form-section--columns">
                  <div className="form-section--column">
                    <h4>Adres odbioru</h4>
                    <div className="form-group form-group--inline">
                      <label> Ulica <input controlId="street" type="text" name="address" /> </label>
                    </div>

                    <div className="form-group form-group--inline">
                      <label> Miasto <input controlId="city" type="text" name="city" /> </label>
                    </div>

                    <div className="form-group form-group--inline">
                      <label>
                        Kod pocztowy <input type="text" name="postcode" />
                      </label>
                    </div>

                    <div className="form-group form-group--inline">
                      <label>
                        Numer telefonu <input controlId="zipCode" type="phone" name="phone" />
                      </label>
                    </div>
                  </div>

                  <div className="form-section--column">
                    <h4>Termin odbioru</h4>
                    <div className="form-group form-group--inline">
                      <label> Data <input controlId="pickupDate" type="date" name="data" /> </label>
                    </div>

                    <div className="form-group form-group--inline">
                      <label> Godzina <input controlId="pickupTime" type="time" name="time" /> </label>
                    </div>

                    <div className="form-group form-group--inline">
                      <label>
                        Uwagi dla kuriera
                    <textarea controlId="pickUpComment" name="more_info" rows="5"></textarea>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group form-group--buttons">
                  <button type="button" className="btn prev-step">Wstecz</button>
                  <button type="button" className="btn next-step">Dalej</button>
                </div>
              </div>

              {/* STEP 5 */}
              <div data-step="5">
                <h3>Podsumowanie Twojej darowizny</h3>

                <div className="summary">
                  <div className="form-section">
                    <h4>Oddajesz:</h4>
                    <ul>
                      <li>
                        <span className="icon icon-bag"></span>
                        <span className="summary--text">4 worki ubrań w dobrym stanie dla dzieci</span>
                      </li>

                      <li>
                        <span className="icon icon-hand"></span>
                        <span className="summary--text">Dla fundacji "Mam marzenie" w Warszawie</span>
                      </li>
                    </ul>
                  </div>

                  <div className="form-section form-section--columns">
                    <div className="form-section--column">
                      <h4>Adres odbioru:</h4>
                      <ul>
                        <li>Prosta 51</li>
                        <li>Warszawa</li>
                        <li>99-098</li>
                        <li>123 456 789</li>
                      </ul>
                    </div>

                    <div className="form-section--column">
                      <h4>Termin odbioru:</h4>
                      <ul>
                        <li>13/12/2018</li>
                        <li>15:40</li>
                        <li>Brak uwag</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="form-group form-group--buttons">
                  <button type="button" className="btn prev-step">Wstecz</button>
                  <button type="submit" className="btn">Potwierdzam</button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <Alert ref={this.registrationAlert} />
      </>
    )
  }
}
export default TEST;