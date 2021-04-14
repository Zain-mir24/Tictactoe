import React from 'react'
import {Button} from 'react-native'

function Square({value,onClick}) {
  const style=value?styles.square`${value}`:styles.square
    return (
        <div>
            <Button style={style} onClick={onClick}>{value}</Button>
        </div>
    )
}
const styles = StyleSheet.create({
    square:{
     backgroundcolor:"black"
    }
})

export default Square
