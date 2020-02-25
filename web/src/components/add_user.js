import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Sidebar from "./sidebar";
import Swal from "sweetalert2";

const API_URL = "http://localhost:4000/createUser";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_lastname: "",
      user_email: "",
      user_pass: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = e => {
    e.preventDefault();
    this.post = {
      user_name: this.state.user_name,
      user_lastname: this.state.user_lastname,
      user_email: this.state.user_email,
      user_pass: this.state.user_pass
    };

    if (
      this.post.user_name === "" ||
      this.post.user_lastname === "" ||
      this.post.user_email === "" ||
      this.post.user_pass === ""
    ) {
      Swal.fire("", "Obligatorio completar todos los campos");
    } else {
      Axios.post(API_URL, this.post)
        .then(response => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario almacenado correctamente",
            showConfirmButton: false,
            timer: 1000
          }).then(() => this.props.history.push("/users"));
        })
        .catch(error => {
          Swal.fire("", "Los datos ingresados son incorrectos");
        });
    }
  };
  render() {
    const { user_name, user_lastname, user_email, user_pass } = this.state;

    return (
      <div>
        <Header />
        <Sidebar />
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full lg:w-3/4 lg:w-1/2 border-2 lg:ml-64 mt-10">
            <div className="flex flex-col w-full p-4">
              <div className="flex flex-col flex-1 justify-center">
                <h1 className="text-4xl text-center font-thin">Registro</h1>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-3/4 mx-auto"
                    onSubmit={this.registerUser}
                  >
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">Nombre:</label>
                      <input
                        onChange={this.changeHandler}
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                        name="user_name"
                        value={user_name}
                        placeholder="Ingresa tu nombre"
                      />

                      <div className="flex flex-col mt-4">
                        <label className="font-thin text-xl mr-5">
                          Apellido:
                        </label>
                        <input
                          onChange={this.changeHandler}
                          type="text"
                          className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                          name="user_lastname"
                          value={user_lastname}
                          placeholder="Ingresa tu apellido"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">Email:</label>
                      <input
                        onChange={this.changeHandler}
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                        name="user_email"
                        value={user_email}
                        placeholder="Ingresa tu correo electrónico"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">
                        Contraseña:
                      </label>
                      <input
                        className="flex-grow h-8 px-2 rounded border border-grey-400 ml-32"
                        type="password"
                        name="user_pass"
                        placeholder="******"
                        value={user_pass}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="flex flex-col mt-8">
                      <div className="flex">
                        <a
                          className="mx-auto bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-8 rounded"
                          href="/home"
                        >
                          Cancelar
                        </a>
                        <button
                          type="submit"
                          className="mx-auto bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-8 rounded"
                        >
                          Crear
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
