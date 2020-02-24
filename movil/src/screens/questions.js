import React, { Component } from "react";
import { Link } from "react-router-native";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  AsyncStorage
} from "react-native";

const API = "http://192.168.100.116:4000/getQuestion";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      idquestion: ""
    };
  }

  getData = () => {
    axios
      .get(`${API}?id=${this.state.idquestion}`)
      .then(response => {
        this.setState({ questions: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  asyncstorageGet = async () => {
    try {
      const idQ = await AsyncStorage.getItem("idquestion");
      this.setState({ idquestion: idQ });
      this.getData();
    } catch (e) {
      alert(e);
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ idquestion: "" });
    } catch (e) {
      alert(e);
    }
  };

  componentDidMount() {
    this.asyncstorageGet();
  }

  render() {
    const { questions } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/bg_preguntas.jpg")}
      >
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        {questions.map(element => (
          <View style={styles.card} key={element.id}>
            <Image
              source={{ uri: `${element.imagen}` }}
              style={styles.image}
            ></Image>
            <Text style={styles.question}>{element.question}</Text>
            <View style={{ marginTop: 20 }}>
              <View key={element.id}>
                <View style={styles.answer}>
                  <Link to="/winner">
                    <Text style={styles.text}>{element.true_answer}</Text>
                  </Link>
                </View>
                <View style={styles.answer}>
                  <Link to="/loser">
                    <Text style={styles.text}>{element.false_answer}</Text>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        ))}
        <Link
          to="/board"
          style={styles.btn}
          onPress={() => this.asyncstorageClear()}
        >
          <Text style={styles.text}>Volver</Text>
        </Link>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  answer: {
    backgroundColor: "#38b2ac",
    borderRadius: 100,
    padding: 10,
    marginVertical: 10
  },
  container: {
    width: "100%",
    height: "100%"
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#409844",
    paddingHorizontal: 70,
    paddingVertical: 10,
    top: 655,
    left: 100,
    position: "absolute"
  },
  card: {
    width: 350,
    height: 560,
    backgroundColor: "#ffffff4f",
    left: 25,
    borderRadius: 10,
    padding: 20,
    marginTop: 40,
    marginBottom: 30
  },
  image: {
    left: 8,
    width: 300,
    height: 200,
    borderRadius: 10
  },
  logo: {
    width: 90,
    height: 50,
    top: 30,
    left: 10
  },
  question: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  }
});
