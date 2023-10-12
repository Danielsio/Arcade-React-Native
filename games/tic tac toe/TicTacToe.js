import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const TicTacToe = () => {
    const INITIAL_STATE = Array(9).fill(null);
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    const [board, setBoard] = useState(INITIAL_STATE);
    const [isPlayerXNext, setIsPlayerXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }

        const updatedBoard = [...board];
        updatedBoard[index] = isPlayerXNext ? PLAYER_X : PLAYER_O;
        setBoard(updatedBoard);
        setIsPlayerXNext(!isPlayerXNext);
    };

    const renderSquare = (index) => {
        let backgroundColor;
        if (board[index] === PLAYER_X) {
            backgroundColor = 'blue';
        } else if (board[index] === PLAYER_O) {
            backgroundColor = 'red';
        } else {
            backgroundColor = 'black'; // Set default color to black
        }

        return (
            <View style={[styles.square, {backgroundColor}]} onTouchEnd={() => handleClick(index)}>
                <Text
                    style={styles.iconText}>{board[index] === PLAYER_X ? 'X' : board[index] === PLAYER_O ? 'O' : ''}</Text>
            </View>
        );
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return squares.every((square) => square !== null) ? 'Draw' : null;
    };


    const winner = calculateWinner(board);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
        status = 'Draw!';
    } else {
        status = `Next player: ${isPlayerXNext ? PLAYER_X : PLAYER_O}`;
    }

    return (
        <View>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.board}>
                <View style={styles.row}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </View>
                <View style={styles.row}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </View>
                <View style={styles.row}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </View>
            </View>
            <Button title="Reset" onPress={() => setBoard([...INITIAL_STATE])}/>
        </View>
    );
};
const styles = StyleSheet.create({
    board: {
        marginTop: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    square: {
        margin: 2,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 48,
        color: 'white',
        textAlign: 'center',
    },
    status: {
        marginBottom: 10,
        fontSize: 24,
        textAlign: 'center',
    },
});

export default TicTacToe;
