import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} 
                style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsleft}>=   {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20, 
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row'
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsleft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#17f',
        padding: 5,
    },
    buttonLabel: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#DDD'
    }
})