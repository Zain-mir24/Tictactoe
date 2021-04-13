import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [value, setvalue] = useState("Dummy value");
  const [player1, setplayer1] = useState();
  const [player2, setplayer2] = useState();
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={styles.button}>
        <Pressable>
          <Button title="0" color="grey" />
        </Pressable>
        <Pressable>
          <Button title="x" color="orange" />
        </Pressable>

        <Pressable>
          <Button title="O" color="grey" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button title="x" color="orange" />
        </Pressable>
        <Pressable>
          <Button title="O" color="grey" />
        </Pressable>

        <Pressable>
          <Button title="x" color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button title="O" color="grey" />
        </Pressable>
        <Pressable>
          <Button title="x" color="orange" />
        </Pressable>

        <Pressable>
          <Button title="x" color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
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
    margin: 10,

    padding: 10,
    flexDirection: "row",
  },
});
