import { Link } from "expo-router"
import React, { useEffect, useState } from "react"
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native"
import registerNNPushToken from "native-notify"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Header from "@/components/model/header"
import Input from "@/components/ui/input"
import { db, firebaseConfig } from "@/firebase/firebase"
import { Navigator } from "expo-router"
import { router } from "expo-router"
import { initializeApp } from "firebase/app"
import { auth } from "@/firebase/firebase"
import axios from "axios"
import { doc, collection, onSnapshot } from "firebase/firestore"

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
export default function Page() {
  registerNNPushToken(20138, "4JBTc36QtaoqYx1LCCWQHE")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [visivel, setVisivel] = useState(false)

  function sendNativeNotifyPush(title, body) {
    const dateSent = new Date().toLocaleString()

    const notificationData = {
      appId: 20138,
      appToken: "4JBTc36QtaoqYx1LCCWQHE",
      title: title,
      body: body,
      dateSent: dateSent,
    }

    axios
      .post("https://app.nativenotify.com/api/notification", notificationData)
      .then((response) => {
        console.log("Notification sent successfully:", response.data)
      })
      .catch((error) => {
        console.error("Error sending notification:", error)
      })
  }

  useEffect(() => {
    const estadoDoc = doc(collection(db, "Estado"), "IDxjPgTSzh5CFGBztez5") // Reference the document
    onSnapshot(estadoDoc, (docSnapshot) => {
      const estadoData = docSnapshot.data() // Get the document's data
      if (estadoData && estadoData.estado === true) {
        // Check for 'estado' field and its value
        sendNativeNotifyPush(
          "Ó o massacre da Serra Elétrica! 🪚🪚",
          "O local onde o sensor está corre risco de desmatamento!! "
        )
      }
    })
  }, [])

  

  function handleSignIn() {
    // Function to handle sign in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        router.replace("/dashboard")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(error.message)
      })
  }
  return (
    <View className="flex-1 w-screen bg-zing-200 justify-center items-center">
      <Header />
      <Text className="text-3xl uppercase mb-10 font-bold">Faça o Login:</Text>
      <View className="flex flex-col w-screen items-center gap-2">
        <TextInput
          className="border py-4 text-xl w-[70%] rounded-lg px-5"
          placeholder="Digite seu E-mail"
          placeholderTextColor={"gray"}
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
          placeholderTextColor={"gray"}
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
          onPress={() => handleSignIn()}
        >
          <Text className="text-white font-semibold text-xl">Entrar</Text>
        </TouchableOpacity>
        <Link href="/cadastro" className="mt-7">
          <Text>
            Não tem conta? <Text className="text-green-600">Crie aqui!</Text>
          </Text>
        </Link>
      </View>
    </View>
  )
}
