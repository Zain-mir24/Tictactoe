import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button, Pressable} from "react-native";

export default function App() {
  const [circle, setcircle] = useState("0");
  const [cross, setcross] = useState("x");
  const [gamestate,setgamestate]=useState([
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ])

  
  const renderIcon=(row,col)=>{
    var value =setgamestate([row],[col])
    switch(value)
    {
      case 1: return <Button  title={cross}/>
      case -1:return <Button  title={circle}/>
      default : return <View />
    }
  }

  const initialize = ()=>{
    setgamestate([
      [1,-1,0],
      [0,0,0],
      [0,0,0]
    ])
  }

  
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
            {initialize}
          </Pressable>
        </View>
        <View style={{ width: 100 }}>
          <Pressable style={styles.button}>
           
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

      <Text>
        {" "}
        player{" "}
        {/* {Xwins > Owins ? (
          <View>X Wins and O loses</View>
        ) : (
          <View>O wins and X loses</View>
        )} */}
      </Text>
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
    backgroundColor: "yellow",
    color: "#000000",
    borderColor: "orange",
    height: 80,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 2,
    padding: 10,
  },
});
