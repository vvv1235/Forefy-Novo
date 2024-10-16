import { useState } from "react"
import {
  View,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native"

interface InputProps {
  tipo?: "email" | "password"; // Only allow these specific types
  value: string;
  onChange: (e: any) => void;
}

const PassImage = [
  {
    id: "aberto",
    image: require("../../../assets/olho.png"),
  },
  {
    id: "fechado",
    image: require("../../../assets/olhofechado.png"),
  },
]

export default function Input(props: InputProps) {
  const [visivel, setVisivel] = useState(false)
  const { tipo, value, onChange } = props;

  if (props.tipo === "email") {
    return (
      <SafeAreaView
        className="flex w-full
            items-center"
      >
        <TextInput
          className="border py-4 text-xl w-[70%] rounded-lg px-5"
          placeholder="Digite seu E-mail"
          value={props.value}
          onChange={onChange}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </SafeAreaView>
    )
  }
  if (props.tipo === "password") {
    return (
      <SafeAreaView
        className="flex w-full
            items-center"
      >
        <TextInput
          className="border py-4 text-xl w-[70%] rounded-lg px-5"
          placeholder="Digite sua Senha"
          value={props.value}
          onChange={onChange}
          secureTextEntry={!visivel}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setVisivel(!visivel)}>
          <Image source={PassImage[visivel ? 1 : 0].image} className="w-10 h-10 absolute bottom-[0.7rem] left-[6.5rem]"/>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
