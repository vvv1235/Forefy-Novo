import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native"
import Header from "@/components/model/header"
import Footer from "@/components/model/footer"
import { useState } from "react"
import { collection, doc, setDoc } from "firebase/firestore"
import { db, auth } from "@/firebase/firebase"

export default function Adicionar() {
  const [name, setName] = useState("")
  const [setor, setSetor] = useState("")
  const [cargo, setCargo] = useState("")
  const [numero, setNumero] = useState("")

  const addContact = async (event) => {
    event.preventDefault()
    const numeroFormatted = numero.replace(/\D/g, "")
    if (numeroFormatted.length !== 11 || !/^[0-9]+$/.test(numeroFormatted)) {
      alert("O número deve conter exatamente 11 dígitos.")
      return
    }
    if (!/^[A-Za-z\s]{6,}$/.test(name)) {
      alert("O nome deve conter apenas letras e ter pelo menos 6 caracteres.")
      return
    }
    try {
      const logCollectionRef = collection(db, "Contatos")
      const user = auth.currentUser
      const logDocRef = doc(logCollectionRef)
      await setDoc(logDocRef, {
        contatoId: logDocRef.id,
        addedBy: user.uid,
        contatoNome: name,
        contatoSetor: setor,
        contatoCargo: cargo,
        contatoNumero: numero,
      })
      alert("Contato adicionado com sucesso!")
      setName("")
      setCargo("")
      setSetor("")
      setNumero("")
    } catch (error) {
      alert(
        "Houve um erro na criação do contato." + <br /> + "Tente novamente!"
      )
    }
  }

  return (
    <>
      <Header />
      <KeyboardAvoidingView
        enabled={true}
        behavior="height"
        className="h-full w-full flex-1 items-center justify-center gap-4 z-0"
      >
        
        <View className="w-[70%] self-center gap-2 z-10">
          <Text className="text-3xl font-bold">Adicionar Contatos:</Text>
          <Text>Nome:</Text>
          <TextInput
            value={name}
            onChange={(e) => setName(e.nativeEvent.text)}
            className="border py-4 text-xl w-[100%] rounded-lg px-5"
          />
          <Text>Setor:</Text>
          <TextInput
            value={setor}
            onChange={(e) => setSetor(e.nativeEvent.text)}
            className="border py-4 text-xl w-[100%] rounded-lg px-5"
          />
          <Text>Cargo/Função:</Text>
          <TextInput
            value={cargo}
            onChange={(e) => setCargo(e.nativeEvent.text)}
            className="border py-4 text-xl w-[100%] rounded-lg px-5"
          />
          <Text>Numero:</Text>
          <TextInput
            value={numero}
            onChange={(e) => setNumero(e.nativeEvent.text)}
            className="border py-4 text-xl w-[100%] rounded-lg px-5"
          />
        </View>
        <TouchableOpacity
          className="bg-green-600 w-[70%] items-center rounded-lg"
          onPress={addContact}
        >
          <Text className="text-xl font-bold text-white py-4">Adicionar</Text>
        </TouchableOpacity>
        <Footer />
      </KeyboardAvoidingView>
    </>
  )
}
