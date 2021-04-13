import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [circle, setcircle] = useState("0");
  const [cross, setcross] = useState("x");
  const [Xwins, setXwins] = useState(0);
  const [Owins, setOwins] = useState(0);
  const [player1, setplayer1] = useState();
  const [player2, setplayer2] = useState();
  const circlepoint = () => {
    setOwins(Owins + 1);
  };
  const crosspoints = () => {
    setXwins(Xwins + 1);
  };
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={circle} color="grey" />
          </Pressable>
        </View>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>

        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={circle} color="grey" />
          </Pressable>
        </View>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>

        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={circle} color="grey" />
          </Pressable>
        </View>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>

        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            <Button title={cross} color="orange" />
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />

      <Text> player 1:0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    color: "#000000",
    borderColor: "#FF0000",
    height: 80,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 2,
    padding: 10,
  },
});
