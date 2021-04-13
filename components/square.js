import React from 'react'
import {Button} from 'react-native'

function square({value,onClick}) {
  const style=value?`squares${value}`:`squares`
    return (
        <div>
            <Button style={styles.square} onClick={onClick}>{value}</Button>
        </div>
    )
}
const styles = StyleSheet.create({
    square:{
     backgroundcolor:"black"
    }
})

export default square
