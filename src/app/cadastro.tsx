import { View, Text, TouchableOpacity, TextInput, Image } from "react-native"
import { Link } from "expo-router"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/firebase"
import { router } from "expo-router"

import Header from "@/components/model/header"
import Input from "@/components/ui/input"

const PassImage = [
  {
    id: "aberto",
    image: require("../../assets/olho.png"),
  },
  {
    id: "fechado",
    image: require("../../assets/olhofechado.png"),
  },
]

export default function Cadastro() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [visivel, setVisivel] = useState(false)

  function firebaseSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user
        console.log(user)
        router.push("/")
        // ...
      })
      .catch((error) => {
        alert(error)
        // ..
      })
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Header />
      <Text className="text-3xl uppercase mb-10 font-bold">
        Faça o Cadastro:
      </Text>
      <View className="flex flex-col w-screen items-center gap-2">
        <TextInput
          className="border py-4 text-xl w-[70%] rounded-lg px-5"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.nativeEvent.text)
          }}
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          className="border py-4 text-xl w-[70%] rounded-lg px-5"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.nativeEvent.text)
          }}
          secureTextEntry={!visivel}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setVisivel(!visivel)}>
          <Image
            source={PassImage[visivel ? 1 : 0].image}
            className="w-10 h-10 absolute bottom-[1.2rem] left-[6.5rem]"
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-green-600 w-[70%] justify-center items-center py-4 rounded-lg text-xl shadow-lg"
          onPress={() => firebaseSignUp()}
        >
          <Text className="text-white font-semibold text-xl">Criar Conta</Text>
        </TouchableOpacity>
        <Link href="/" className="mt-7">
          <Text>
            Já tem conta? <Text className="text-green-600">Entre aqui!</Text>
          </Text>
        </Link>
      </View>
    </View>
  )
}
