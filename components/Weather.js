import React,{useEffect, useState} from 'react'
import { Text, ImageBackground, StyleSheet  , View} from 'react-native';
import Forecast from './Forcast';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-', 
    description: '-',
    temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3a8a0d7b62dec984b3339bc480483e09`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                         main: json.weather[0].main,
                         description: json.weather[0].description,
                         temp: json.main.temp
                     });
                })
                .catch((error) => {
                     console.warn(error);
                });
             }
         }, [props.zipCode])
         
    return (
        <View>
            <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
                <Text style={styles.home}>Zip Code</Text>
                <Text style={styles.home}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
 },
    home: {
        textAlign: 'center',
        fontSize: 30,
        color: 'rgb(3, 49, 91)',
       
    }
});