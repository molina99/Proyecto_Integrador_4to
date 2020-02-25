import React, { Component } from "react";
import Axios from "axios";
import Sidebar from "./sidebar";
import Header from "./header";
import Swal from "sweetalert2";

const API_URL = "http://localhost:4000/getUser";
const API_URL_DELETE = "http://localhost:4000/deleteUser/";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    Axios.get(API_URL)
      .then(response => {
        this.setState({ users: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteUser = value => {
    Axios.delete(`${API_URL_DELETE}` + value, {
      data: { id: value }
    });
    Swal.fire({
      title: "¿Eliminar usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        window.location.assign("http://localhost:3000/users");
      }
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="lg:mx-10 lg:ml-64">
          <div className="lg:ml-10 mt-10 border-2 p-5 rounded-lg">
            <h2 className="text-center text-4xl font-thin">
              Usuarios registrados
            </h2>
          </div>
          <div className="lg:ml-10 bg-white shadow-md rounded-lg my-6">
            <table className="text-left w-full">
              <thead>
                <tr className="bg-teal-300">
                  <th className="border-r rounded-tl py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Nombre
                  </th>
                  <th className="border-r py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Apellido
                  </th>
                  <th className=" py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Correo electrónico
                  </th>
                  <th className="rounded-tr border-b border-grey-light"></th>
                </tr>
              </thead>
              <tbody>
                {users.map(element => (
                  <tr className="hover:bg-teal-200 border-b border-grey-light items-center">
                    <td className="py-4 px-3 border-b border-grey-light">
                      <p className="p-3 px-5" key={element.id}>
                        {element.user_name}
                      </p>
                    </td>
                    <td className="py-4 px-3">
                      <p className="p-3 px-5" key={element.id}>
                        {element.user_lastname}
                      </p>
                    </td>
                    <td className="py-4 px-3">
                      <p className="p-3 px-5" key={element.id}>
                        {element.user_email}
                      </p>
                    </td>

                    <td className="hidden xl:flex px-6 py-8" key={element.id}>
                      <p key={element.id}>
                        <button
                          onClick={() => this.deleteUser(element.id)}
                          className="mt-2 text-gray-200 font-bold py-1 px-3 rounded-full text-xs bg-red-400 hover:bg-red-500"
                        >
                          Eliminar
                        </button>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
