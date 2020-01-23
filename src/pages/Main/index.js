import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {

  const [ currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {

    async function loadInitialLocation() {
      const { granted } = await requestPermissionsAsync()

      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        })

        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude, 
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        })
      }
    }

    loadInitialLocation()
  },[])

  if(!currentRegion){
    return null
  }

  return (
    <>
      <MapView initialRegion={currentRegion} style={{flex:1}}>
        <Marker coordinate={{ latitude: 37.785834, longitude: -122.406417}}>
          <Image style={style.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/32879689?v=4'}} />
          <Callout onPress={() => {
            navigation.navigate('Profile', { github_username: 'theneocarvalho'})
          }}>
            <View style={style.callout}>
              <Text style={style.devName}>Manoel Carvalho</Text>
              <Text style={style.devBio}>CTO na @Loop. Apaixonado por tecnologia.</Text>
              <Text style={style.devTechs}>ReactJS, NodeJS</Text>
            </View>
          </Callout>
        </Marker>
        
      </MapView>
      <View style={style.searchForm}>
        <TextInput style={style.search} placeholder="Search for Dev's" placeholderTextColor="#999" autoCapitalize="none" autoCorrect={false}/>
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <MaterialIcons name="my-location" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },
  callout:{
    width: 250,
    paddingHorizontal: 10
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5
  },
  devBio: {
    color: '#666',
    marginTop: 5
  },
  devTechs: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  searchForm:{
    position: 'absolute',
    top: 25,
    zIndex: 5,
    flexDirection: 'row',
    marginHorizontal:10
  },
  search:{
    flex: 1,
    height: 50,
    backgroundColor:'#fff',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    color: '#333',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 1,
    paddingHorizontal: 20,
    fontSize: 16,

  },
  button:{
    width: 50,
    height: 50,justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292e',
    borderRadius: 25,
  }

})

export default Main
