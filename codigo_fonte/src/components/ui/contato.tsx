import { View, Text, Image, TouchableOpacity } from "react-native"
import { useState } from "react"
import * as Clipboard from "expo-clipboard"
import { Linking } from "react-native"

interface ContatoProps {
  name: string
  setor: string
  cargo: string
  numero: string
}
export default function Contato(props: ContatoProps) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(props.numero)
    alert("Número copiado para a área de transferência!\n" + props.numero)
  }

  return (
    <View className="flex flex-row items-center mb-5">
      <Image
        source={require("../../../assets/IconPessoa.png")}
        alt="iconpessoa"
        className="w-24 h-24"
      />
      <View className="ml-5">
        <Text className="font-semibold text-lg">{props.name}</Text>
        <Text className="font-semibold text-lg">{props.setor}</Text>
        <Text className="font-semibold text-lg">{props.cargo}</Text>
        <TouchableOpacity onPress={copyToClipboard} className="flex flex-row">
          <Text className=" text-lg underline text-blue-600">
            +55 {props.numero}
          </Text>
          <Image
            source={require("../../../assets/copy.png")}
            alt="iconpessoa"
            className="w-5 h-5 ml-2 top-1 "
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
