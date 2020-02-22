import React, { Component } from "react";
import Axios from "axios";
import AlertComplete from "./alert_login";

const API_URL = "http://localhost:4000/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      user_pass: "",
      alert_complete: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginAccess = e => {
    e.preventDefault();
    if (this.state.user_email === "" || this.state.user_pass === "") {
      // alert("Obligatorio completar todos los campos");
      this.setState({alert_complete:"complete"})
    } else {
      Axios.post(API_URL, this.state)
        .then(response => {
          if (response.data.mensaje === "Encontrado") {
            window.location.assign("http://localhost:3000/home");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };
  render() {
    const imagen = require("../assets/pelicula.jpg");
    const fondo = require("../assets/fondo.jpg");
    const { user_email, user_pass } = this.state;
    return (
      <div className="bg-teal-500 h-screen w-screen">
        {this.state.alert_complete=="complete"?<AlertComplete/>:null}
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">
                  Ingreso al Sistema
                </h1>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-3/4 mx-auto"
                    onSubmit={this.loginAccess}
                  >
                    <div className="flex flex-col mt-4">
                      <input
                        onChange={this.changeHandler}
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400"
                        name="user_email"
                        value={user_email}
                        placeholder="Correo electrónico"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        className="flex-grow h-8 px-2 rounded border border-grey-400"
                        type="password"
                        name="user_pass"
                        placeholder="Contraseña"
                        value={user_pass}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="flex flex-col mt-8">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg">
              <img src={fondo} className="h-full bg-cover bg-center rounded-r-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
