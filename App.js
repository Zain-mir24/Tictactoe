import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [circle, setcircle] = useState("0");
  const [cross,setcross]=useState("x")
  const [Xwins,setXwins]=useState(0)
  const [Owins,Owins]=useState(0)
  const [player1, setplayer1] = useState();
  const [player2, setplayer2] = useState();

  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={styles.button}>
        <Pressable>
          <Button title={circle} color="grey" />
        </Pressable>
        <Pressable>
          <Button title={cross} color="orange" />
        </Pressable>

        <Pressable>
          <Button title={circle} color="grey" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button title={cross} color="orange" />
        </Pressable>
        <Pressable>
          <Button title={circle}color="grey" />
        </Pressable>

        <Pressable>
          <Button title={cross} color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={styles.button}>
        <Pressable>
          <Button title={circle} color="grey" />
        </Pressable>
        <Pressable>
          <Button title={cross} color="orange" />
        </Pressable>

        <Pressable>
          <Button title={cross} color="orange" />
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
