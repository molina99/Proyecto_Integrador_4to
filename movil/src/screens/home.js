import React, { Component } from "react";
import { Link } from "react-router-native";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("../../assets/fondo.jpg")}
      >
        <View>
          <View>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/saludo.png")}
              style={styles.image2}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/persona1.png")}
              style={styles.image3}
            />
          </View>

          <Link to="/board" style={styles.btn}>
            <Text style={styles.text}>JUGAR</Text>
          </Link>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: 250,
    height: 150,
    top: 60,
    left: 30
  },
  image2: {
    position: "absolute",
    width: 200,
    height: 190,
    top: 80,
    left: 50
  },
  image3: {
    position: "absolute",
    top: 180,
    left: 150
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#ec2222",
    paddingHorizontal: 20,
    paddingVertical: 10,
    top: 450,
    marginHorizontal: 70
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30
  }
});
