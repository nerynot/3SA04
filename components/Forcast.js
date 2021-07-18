import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.line }>{props.main}</Text>
            <Text style={styles.home }>Country</Text>
            <Text style={styles.line }>{props.name} {props.country}</Text>
            <Text style={styles.home }>{props.description}</Text>
            <Text style={styles.line }>{props.temp}</Text>
            <Text style={styles.line }>°C</Text>
        </View>
    );
}    
const styles = StyleSheet.create({
    home: {
        textAlign: 'center',
        fontSize: 30,
        color: 'rgb(1, 1, 1)',
        fontWeight: 'bold',
    },
    line: {
        textAlign: 'center',
        fontSize: 30,
        color: 'rgb(221, 2, 2)',
        fontWeight: 'bold',
    }
});