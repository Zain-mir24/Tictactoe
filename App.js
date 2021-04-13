import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={stylingbuttons.container}>
        <Pressable>
          <Button  title="O" color="orange" />
        </Pressable>
        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={stylingbuttons.container}>
        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>
        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
      <View style={stylingbuttons.container}>
        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>
        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <Pressable>
          <Button title="O" color="orange" />
        </Pressable>

        <StatusBar style="auto" />
      </View>
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
});

const stylingbuttons=StyleSheet.create({
  container:{
    margin:10,
    padding:10,
    flexDirection:'row'
  }
})