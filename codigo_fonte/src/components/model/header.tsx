import { View, TouchableOpacity, Image, Text } from "react-native";

export default function Header() {
    return (
      <View className="h-36 bg-green-900 items-center justify-center pt-16 w-screen mb-3 absolute left-0 top-0 z-10">
        <TouchableOpacity className="flex flex-row items-center">
          <Image
            source={require("../../../assets/sino.png")}
            className="w-8 h-8 m-4"
          />
          <Text className="text-white font-semibold text-lg">
            Alerta de Desmatamento
          </Text>
        </TouchableOpacity>
      </View>
    )
  }