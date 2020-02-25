import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Sidebar from "./sidebar";
import Swal from "sweetalert2";

const API_URL = "http://localhost:4000/createQuestion";

class Create_Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      true_answer: "",
      false_answer: "",
      imagen: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerQuestion = e => {
    e.preventDefault();
    this.post = {
      question: this.state.question,
      true_answer: this.state.true_answer,
      false_answer: this.state.false_answer,
      imagen: this.state.imagen
    };

    if (
      this.post.question === "" ||
      this.post.true_answer === "" ||
      this.post.false_answer === "" ||
      this.post.imagen === ""
    ) {
      Swal.fire("", "Obligatorio completar todos los campos");
    } else {
      Axios.post(API_URL, this.post)
        .then(response => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Pregunta almacenada correctamente",
            showConfirmButton: false,
            timer: 1000
          }).then(() => this.props.history.push("/questions"));
        })
        .catch(error => {
          Swal.fire("", "Los datos ingresados son incorrectos");
        });
    }
  };

  encodeImageFileAsURL = e => {
    const reader = new FileReader();
    const file = new Blob([e.target.value], { type: "img/png" });
    this.setState({ imagen: file });
    reader.onloadend = e => {
      this.setState({ imagen: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  onFileChange = e => {
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imagen: reader.result });
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { question, true_answer, false_answer, imagen } = this.state;

    return (
      <div>
        <Header />
        <Sidebar />
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full lg:w-3/4 lg:w-1/2 border-2 lg:ml-64 mt-10">
            <div className="flex flex-col w-full p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">
                  Nueva Pregunta
                </h1>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-3/4 mx-auto"
                    onSubmit={this.registerQuestion}
                  >
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">
                        Pregunta:
                      </label>
                      <input
                        onChange={this.changeHandler}
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                        name="question"
                        value={question}
                        placeholder="Ingrese la pregunta"
                      />

                      <div className="flex flex-col mt-4">
                        <label className="font-thin text-xl mr-5">
                          Respuesta correcta:
                        </label>
                        <input
                          onChange={this.changeHandler}
                          type="text"
                          className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                          name="true_answer"
                          value={true_answer}
                          placeholder="Ingrese la respuesta correcta"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">
                        Respuesta incorrecta:
                      </label>
                      <input
                        onChange={this.changeHandler}
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400 ml-32"
                        name="false_answer"
                        value={false_answer}
                        placeholder="Ingrese la respuesta incorrecta"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">Portada:</label>
                      <input
                        className="flex-grow h-8 px-2 rounded border border-grey-400 ml-32"
                        type="file"
                        name="imagen"
                        placeholder="******"
                        defaultValue={imagen}
                        onChange={this.onFileChange}
                      />
                    </div>
                    <div className="flex flex-col mt-8">
                      <div className="flex">
                        <a
                          className="mx-auto bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-8 rounded"
                          href="http://localhost:3000/home"
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

export default Create_Question;
