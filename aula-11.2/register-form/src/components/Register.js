import React, { Component } from 'react'

export class Register extends Component {
    render(){
        const { usuarios } = this.props
        console.log(usuarios)
        return (
            <section className="register">
                <h1>Usuários Registrados</h1>
            <ul>
                {usuarios.map(usuario => <li key={usuario}>{usuario}</li>) }
            </ul>
            </section>
        )
    }
}

export default Register