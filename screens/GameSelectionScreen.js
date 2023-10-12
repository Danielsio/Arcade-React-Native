import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import GameButton from '../components/GameButton';
import TicTacToe from '../games/tic tac toe/TicTacToe';

const GameSelectionScreen = ({navigation}) => {
    const games = [
        {
            name: 'Tic Tac Toe',
            image: '../assets/tic-tac-toe.png',
            component: TicTacToe,
        },
        // Add more games as needed
    ];

    return (
        <View style={styles.container}>
            <Header title="Choose a game to play"/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {games.map((game, index) => (
                    <GameButton
                        key={index}
                        game={game}
                        onPress={() => navigation.navigate('Game', {selectedGame: game.component})}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
});

export default GameSelectionScreen;
