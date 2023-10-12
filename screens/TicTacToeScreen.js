import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import TicTacToe from "../games/tic tac toe/TicTacToe";

const TicTacToeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.gameContainer}>
                <TicTacToe/>
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => navigation.goBack()} style={styles.button}>
                    Exit Game
                </Button>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    gameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    button: {
        paddingVertical: 10,
    },
};

export default TicTacToeScreen;
