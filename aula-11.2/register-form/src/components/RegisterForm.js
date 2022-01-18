import React, { Component } from "react";

// 1 - iniciar e criar o estado


export class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.name)
    const { name } = event.target;
    this.setState({ [name]: event.target.value })
}

handleSubmit = (event) =>{
    const { email } = this.state
    this.props.addNewUser(email)
    alert(`Usuário ${email} cadastrado com sucesso.`)
    event.preventDefault() //para o comportamento padrao do <form>
    
}
  render() {

    const { email, password } = this.state;

    return (
      <section className="register-form">
        <h1>Registro de usuário</h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            Email
            <input
                value={email}
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange }
            />
          </label>
          <label>
            Senha
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
            />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </section>
    );
  }
}

export default RegisterForm;
