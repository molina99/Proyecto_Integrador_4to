import React, { Component } from "react";
import Axios from "axios";
import Sidebar from "./sidebar";
import Header from "./header";
import Swal from "sweetalert2";

const API_URL = "http://localhost:4000/getQuestion";
const API_URL_DELETE = "http://localhost:4000/deleteQuestion/";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    Axios.get(API_URL)
      .then(response => {
        this.setState({ questions: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateBook = (
    putId,
    putQuestion,
    putTrueAnswer,
    putFalseAnswer
    // putImage
  ) => {
    localStorage.setItem("id", putId);
    localStorage.setItem("question", putQuestion);
    localStorage.setItem("true_answer", putTrueAnswer);
    localStorage.setItem("false_answer", putFalseAnswer);
    // localStorage.setItem("imagen", putImage);
    this.props.history.push("/update_question");
  };

  deleteQuestion = value => {
    Axios.delete(`${API_URL_DELETE}` + value, {
      data: { id: value }
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Pregunta eliminada correctamente",
      showConfirmButton: false,
      timer: 1000
    }).then(() => window.location.assign("http://localhost:3000/questions"));
  };

  render() {
    const { questions } = this.state;
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="lg:mx-10 lg:ml-64">
          <div className="lg:ml-10 mt-10 border-2 p-5 rounded-lg">
            <h2 className="text-center text-4xl font-thin">Preguntas</h2>
          </div>
          <div className="lg:ml-10 bg-white shadow-md rounded-lg my-6">
            <table className="text-left w-full">
              <thead>
                <tr className="bg-teal-300">
                  <th className="border-r rounded-tl py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Preguntas
                  </th>
                  <th className="border-r py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Respuesta Correcta
                  </th>
                  <th className=" py-4 px-6 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Respuesta Incorrecta
                  </th>
                  <th className="border-r rounded-tr"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-4 px-3 border-b border-grey-light">
                    {questions.map(element => (
                      <p className="p-3 px-5" key={element.id}>
                        {element.question}
                      </p>
                    ))}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {questions.map(element => (
                      <p className="p-3 px-5" key={element.id}>
                        {element.true_answer}
                      </p>
                    ))}
                  </td>
                  <td className="py-4 px-6 border-b border-grey-light">
                    {questions.map(element => (
                      <p className="p-3 px-5" key={element.id}>
                        {element.false_answer}
                      </p>
                    ))}
                  </td>
                  {questions.map(element => (
                    <td
                      className="hidden xl:flex py-4 px-6 border-grey-light"
                      key={element.id}
                    >
                      <p className="px-5">
                        <button
                          onClick={() =>
                            this.updateBook(
                              element.id,
                              element.question,
                              element.true_answer,
                              element.false_answer
                              // element.imagen
                            )
                          }
                          className="mt-2 text-gray-200 font-bold py-1 px-3 rounded-full text-xs bg-green-400 hover:bg-green-500"
                        >
                          Editar
                        </button>
                      </p>
                      <p key={element.id}>
                        <button
                          onClick={() => this.deleteQuestion(element.id)}
                          className="mt-2 text-gray-200 font-bold py-1 px-3 rounded-full text-xs bg-red-400 hover:bg-red-500"
                        >
                          Eliminar
                        </button>
                      </p>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
