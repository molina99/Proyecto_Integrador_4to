import React, { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="mx-20">
          <Link to="/add_user">
            <div className="mt-6 border-2 p-5 rounded-lg hover:bg-teal-200">
              <h2 className="text-center text-4xl font-thin">
                REGISTRO DE ADMINISTRADORES
              </h2>
            </div>
          </Link>
          <Link to="/users">
            <div className="mt-6 border-2 p-5 rounded-lg hover:bg-teal-200">
              <h2 className="text-center text-4xl font-thin">
                ADMINISTRADORES REGISTRADOS
              </h2>
            </div>
          </Link>
          <Link to="/add_question">
            <div className="mt-6 border-2 p-5 rounded-lg hover:bg-teal-200">
              <h2 className="text-center text-4xl font-thin">
                REGISTRO DE PREGUNTAS
              </h2>
            </div>
          </Link>
          <Link to="/questions">
            <div className="mt-6 border-2 p-5 rounded-lg hover:bg-teal-200">
              <h2 className="text-center text-4xl font-thin">
                GESTIÓN DE PREGUNTAS
              </h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
