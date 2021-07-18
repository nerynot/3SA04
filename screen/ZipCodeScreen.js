import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableHighlight, TouchableHighlightComponent} from "react-native"
import { useNavigation } from '@react-navigation/native';

const availableZipItemsNorth = [
    
    { place: '  Chiangmai', code: '50000' },
    { place: '  Khonkaen', code: '40000' },
    { place: '  Nan', code: '55000' },
    { place: '  Maehongson', code: '58000' },
]
const availableZipItemsCentral = [
    
    { place: '  Bankkok', code: '10110' },
    { place: '  Samutprakan', code: '10280' },
    { place: '  Nonthaburi', code: '11000' },
    { place: '  Ayutthaya', code: '13000' },
]
const availableZipItemsSouth = [
    
    { place: '  Hatyai', code: '90110' },
    { place: '  Trang', code: '92000' },
    { place: '  Kabi', code: '81000' },
    { place: '  Suratthani', code: '84000' },
    { place: '  Phuket', code: '83000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
         <View style={styles.zipItem}>
             
             <Text style={styles.zipPlace}>{place}</Text>
             <Text style={styles.zipCode}>{code}</Text>
         </View>
     </TouchableHighlight>
)
   

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.home}> Weather in Thailand </Text>

            <Text style={styles.line}> North </Text>

            <FlatList
              data = {availableZipItemsNorth}
              keyExtractor = {item => item.code}
              renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
            <Text style={styles.line}> Cental  </Text>

            <FlatList
              data = {availableZipItemsCentral}
              keyExtractor = {item => item.code}
              renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
            <Text style={styles.line}> South  </Text>

            <FlatList
              data = {availableZipItemsSouth}
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
        textAlign: 'left',
        padding: 2,
        fontSize: 16,
        color: 'rgb(51, 255, 216)',
        backgroundColor: `rgb(26, 107, 217)`,
      
    },
    zipCode: {
        flex: 1,
        textAlign: 'right',
        padding: 2,
        fontSize: 16,
        color: 'rgb(51, 255, 216)',
        backgroundColor: `rgb(26, 107, 217)`,
        
    },
    home: {
        textAlign: 'left',
        padding: 9,
        fontSize: 30,
        color: 'rgb(51, 255, 216)',
        backgroundColor: `rgb(6, 42, 92)`,

    },
    line: {
        textAlign: 'left',
        padding: 9,
        fontSize: 20,
        color: 'rgb(51, 255, 216)',
        backgroundColor: `rgb(13, 44, 210)`,
        

    }
})
