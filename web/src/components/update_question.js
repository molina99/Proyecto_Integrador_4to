import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Sidebar from "./sidebar";
import Swal from "sweetalert2";

const API = "http://localhost:4000/updateQuestion/";

class Update_Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem("id"),
      question: localStorage.getItem("question"),
      true_answer: localStorage.getItem("true_answer"),
      false_answer: localStorage.getItem("false_answer"),
      // imagen: localStorage.getItem("imagen")
      imagen: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
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

  updateQuestion = e => {
    e.preventDefault();
    this.update = {
      question: this.state.question,
      true_answer: this.state.true_answer,
      false_answer: this.state.false_answer,
      imagen: this.state.imagen
    };

    if (
      this.update.question === "" ||
      this.update.true_answer === "" ||
      this.update.false_answer === "" ||
      this.update.imagen === ""
    ) {
      Swal.fire("", "Obligatorio completar todos los campos");
    } else {
      Axios.put(`${API}` + this.state.id, this.update)
        .then(response => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Pregunta actualizada correctamente",
            showConfirmButton: false,
            timer: 1000
          }).then(() => this.props.history.push("/questions"));
        })
        .catch(error => {
          console.log(error);
        });
    }
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
                  Actualizar Pregunta
                </h1>
                <div className="w-full mt-4">
                  <form
                    className="form-horizontal w-3/4 mx-auto"
                    onSubmit={this.updateQuestion}
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
                        placeholder="Pregunta"
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
                          placeholder="Respuesta correcta"
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
                        placeholder="Respuesta incorrecta"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <label className="font-thin text-xl mr-5">Portada:</label>
                      <input
                        className="flex-grow h-8 px-2 rounded border border-grey-400 ml-32"
                        type="file"
                        // required={true}
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
                          href="http://localhost:3000/questions"
                        >
                          Cancelar
                        </a>
                        <button
                          type="submit"
                          className="mx-auto bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-8 rounded"
                        >
                          Actualizar
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

export default Update_Question;
