import React,{useState} from 'react'
import { Text, View } from 'react-native';
import Forecast from './Forcast';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <Forecast {...forecastInfo}/>
        </View>
     ) 
 }
 const styles = StyleSheet.create({
    backdrop: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
    },
   });
   