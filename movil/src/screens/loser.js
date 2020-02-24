import React, { Component } from "react";
import { Text, View, ImageBackground, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export default class Loser extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/fondo_loser.jpg")}
      >
        <View style={styles.header}>
          <Text style={styles.textHeader}>¡OH NO!</Text>
        </View>
        <Image
          style={styles.imagen}
          source={require("../../assets/planet2.png")}
        />
        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            Aún podemos salvar a nuestro planeta
          </Text>
        </View>
        <Link to="/board" style={styles.btn}>
          <Text style={styles.text}>Volvamos a intentarlo</Text>
        </Link>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#38b2ac",
    paddingHorizontal: 20,
    paddingVertical: 10,
    top: 330,
    marginHorizontal: 50
  },
  header: {
    position: "absolute",
    top: 90,
    marginLeft: 100,
    marginRight: 100
  },
  imagen: {
    width: 320,
    height: 300,
    top: 200,
    marginLeft: 40,
    marginRight: 40
  },
  footer: {
    position: "absolute",
    top: 500,
    marginHorizontal: 10
  },
  textHeader: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  textFooter: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
});
