import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Link } from "react-router-native";
import { Card } from "react-native-elements";
import axios from "axios";

const API = "http://192.168.100.116:4000/getQuestion";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    axios
      .get(API)
      .then(response => {
        this.setState({ questions: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  asyncstorageSave = async idquestion => {
    try {
      await AsyncStorage.setItem("idquestion", idquestion.toString());
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { questions } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/bg_preguntas.jpg")}
      >
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>
              Elije la que quieras
            </Text>
          </View>

          <ScrollView vertical={true}>
            {questions.map(element => (
              <Link
                to="/questions"
                key={element.id}
                onPress={() => this.asyncstorageSave(element.id)}
              >
                <Card title="Tarjeta" image={{ uri: `${element.imagen}` }} />
              </Link>
            ))}
            <Link to="/" style={styles.btn}>
              <Text style={styles.text}>Volver</Text>
            </Link>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#409844",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 70,
    marginRight: 70,
    marginVertical: 20
  },
  logo: {
    width: 90,
    height: 50,
    top: 30,
    left: 10
  },
  top: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: "#000",
    fontSize: 35,
    paddingVertical: 10,
    paddingLeft: 40,
    paddingRight: 40,
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8
  },
  menuContainer: {
    height: "40%"
  },
  overlayContainer: {
    flex: 1
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  }
});
