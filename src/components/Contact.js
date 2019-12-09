import React from "react";
import "../stylesheets/layout/Contact.scss";
import "../stylesheets/components/_buttons.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      message: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMesagge = this.handleMesagge.bind(this);
  }

  handleUsername(ev) {
    const username = ev.target.value;
    this.setState({
      username: username
    });
  }
  handleEmail(ev) {
    const email = ev.target.value;
    this.setState({
      email: email
    });
  }
  handleMesagge(ev) {
    const message = ev.target.value;
    this.setState({
      message: message
    });
  }
  render() {
    const { username, email, message } = this.state;
    return (
      <section className="form">
        <div className="bg-container">
          <h2 className="form__title">Ponte en contacto conmigo</h2>
          <form
            className="form__content"
            action="https://formspree.io/eva.lm1810@gmail.com"
            method="POST"
          >
            <label htmlFor="username" className="form__label">
              Nombre y apellidos <small className="asterisk">*</small>
            </label>
            <input
              className="form__input"
              onChange={this.handleUsername}
              name="name"
              id="username"
              type="text"
              value={username}
              required
            />

            <label htmlFor="email" className="form__label">
              Correo electrónico <small className="asterisk">*</small>
            </label>
            <input
              className="form__input"
              onChange={this.handleEmail}
              name="name"
              id="email"
              type="email"
              value={email}
              required
            />
            <label htmlFor="message" className="form__label">
              Comentario <small className="asterisk">*</small>
            </label>
            <textarea
              className="form__input textarea"
              onChange={this.handleMesagge}
              id="message"
              name="name"
              value={message}
              required
            />
            <div className="form__btn-content">
              <button className="form__button" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
