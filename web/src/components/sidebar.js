import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav className="border-t-2 border-white absolute h-full hidden lg:flex shadow-xl bg-teal-500 items-center md:w-64 z-10 py-4 px-6">
    <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
      <div className="flex items-center flex-no-shrink text-white mr-6 mx-64"></div>
      <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
            <p className="text-white text-xs uppercase py-3 font-bold block">
              <i className="fas fa-book-open mr-2 text-sm"></i>
              Gestión de usuarios
            </p>
            <ul>
              <Link to="/add_user">
                <li className="mx-8 text-gray-800 hover:text-gray-300">
                  <i className="fas fa-arrow-circle-right"></i>
                  Crear usuario
                </li>
              </Link>
            </ul>
            <ul>
              <Link to="/users">
                <li className="mx-8 text-gray-800 hover:text-gray-300">
                  <i className="fas fa-arrow-circle-right"></i>
                  Usuarios
                </li>
              </Link>
            </ul>
          </li>
          <li className="items-center">
            <p className="text-white text-xs uppercase py-3 font-bold block">
              <i className="fas fa-check mr-2 text-sm"></i>
              Gestión del Juego
            </p>
            <ul>
              <Link to="/add_question">
                <li className="mx-8 text-gray-800 hover:text-gray-300">
                  <i className="fas fa-arrow-circle-right"></i>
                  Crear Pregunta
                </li>
              </Link>
            </ul>
            <ul>
              <Link to="/questions">
                <li className="mx-8 text-gray-800 hover:text-gray-300">
                  <i className="fas fa-arrow-circle-right"></i>
                  Preguntas
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Sidebar;
