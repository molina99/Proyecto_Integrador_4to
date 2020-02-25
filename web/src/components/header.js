import React, { Component } from "react";
import Swal from "sweetalert2";
const logo = require("../assets/gyba.png");

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: localStorage.getItem("id"),
  //     user_name: localStorage.getItem("user_name"),
  //     user_lastname: localStorage.getItem("user_lastname")
  //   };
  // }

  logout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Salir",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        window.location.assign("http://localhost:3000/");
      }
    });
  };

  render() {
    // const { user_name } = this.state;
    return (
      <div className="flex bg-teal-500 p-6 justify-between">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <img src={logo} className="h-16 w-32 mr-2 absolute" alt="a" />
          <span className="font-semibold text-xl tracking-tight ml-32">
            <a href="http://localhost:3000/home">Ambiente GYBA</a>
          </span>
        </div>
        <div className="mr-10 mt-1">
          <div>
            {/* <label>{user_name}</label> */}
            <button
              className="items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              onClick={() => this.logout()}
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    );
  }
}
