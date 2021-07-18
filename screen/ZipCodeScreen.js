import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight, TouchableHighlightComponent} from "react-native"
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    
    { place: '  Hatyai', code: '90110' },
    { place: '  Trang', code: '92000' },
    { place: '  Chiangmai', code: '50000' },
    { place: '  Khonkaen', code: '40000' },
    { place: '  Chonburi', code: '20000' },
    { place: '  Kabi', code: '81000' },
    { place: '  Suratthani', code: '84000' },
    { place: '  phuket', code: '83000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
         <View style={styles.zipItem}>
             
             <Text>{place}</Text>
             <Text>{code}</Text>
         </View>
     </TouchableHighlight>
)
   

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.home}> AAA </Text>

            <FlatList
              data = {availableZipItems}
              keyExtractor = {item => item.code}
              renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
         flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    home: {
        textAlign: 'left',
        padding: 9,
        fontSize: 30,
        color: 'rgb(51, 255, 216)',
        backgroundColor: `rgb(3, 37, 137)`,
        width: '100%',
        height: '20%',

    }
})
