import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native' 
import MapView from 'react-native-maps' 

const Map = () => {
    return (
        <Text>
            <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 37.33233,
                longitude:-122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            />
        </Text>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default Map 
