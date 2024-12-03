import { Link } from "expo-router"
import React, { useState } from "react"
import MapView, { Marker } from "react-native-maps"
import { Text, TouchableOpacity, View, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Header from "@/components/model/header"
import Footer from "@/components/model/footer"

export default function Dashboard() {
  const [mapRegion, setMapRegion] = useState({
    latitude: -3.1175289773523414,
    longitude: -58.44310195614139,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  return (
    <View className="flex flex-1 bg-zinc-100 items-center justify-center">
      <Header />
      <MapView className="h-16 w-16" style={{ width: 350, height: 350 }} mapType="mutedStandard" region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
      <View className="w-16 h-16Íbg-blue-500" />
      <Coordernadas latitude={mapRegion.latitude} longitude={mapRegion.longitude} />
      <Footer />
    </View>
  )
}


interface CoordernadasProps {
  latitude: number
  longitude: number
}
function Coordernadas(props: CoordernadasProps) {
  return (
    <View className="mt-10">
      <Text className="text-2xl font-semibold mb-5">Localização:</Text>
      <Text className="text-xl font-medium">Latitude: {props.latitude}</Text>
      <Text className="text-xl font-medium">Longitude: {props.longitude}</Text>
    </View>
  )
}


