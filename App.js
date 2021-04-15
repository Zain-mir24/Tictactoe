import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, Button, Pressable} from "react-native";

const RButton=()=>{
  const [value,setvalue]=useState('')
    return(
      <div>
       <Pressable
       onPress={()=>{
    setvalue('X')
       }}
       onLongPress={()=>{
         setvalue('0')
       }}
       style={
        {flexDirection: "row",
        alignItems: "center",
        backgroundColor: "yellow",
        color: "#000000",
        borderColor: "orange",
        height: 80,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 2,
        padding: 10,}
       }>  {value}</Pressable>
       
       
      </div>
    )
  
}

export default function App() {
   
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
          <RButton  />
        </View>
        <View style={{ width: 100 }}>
        <RButton  />
        </View>

        <View style={{ width: 100 }}>
        <RButton  />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
        <RButton  />
        </View>
        <View style={{ width: 100 }}>
        <RButton  />
        </View>

        <View style={{ width: 100 }}>
        <RButton  />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100 }}>
        <RButton  />
        </View>
        <View style={{ width: 100 }}>
        <RButton  />
        </View>

        <View style={{ width: 100 }}>
        <RButton  />
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
