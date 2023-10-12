import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const GameButton = ({game, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={game.image} style={styles.logo}/>
            <Text style={styles.buttonText}>{game.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain', // Adjust the image display mode as needed
    },
});

export default GameButton;
