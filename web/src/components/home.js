import React, { Component } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="lg:mx-10 lg:ml-64">
          <div className="lg:ml-10 mt-10 border-2 p-5 rounded-lg">
            <h2 className="text-center text-4xl font-thin">Gestión General</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
