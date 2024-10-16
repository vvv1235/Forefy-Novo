import React, { useEffect, useRef, useState } from "react"
import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { Link } from "expo-router"

import Header from "@/components/model/header"
import Footer from "@/components/model/footer"
import Contato from "@/components/ui/contato"

import { collection, getDocs, query } from "firebase/firestore"
import { db } from "@/firebase/firebase"

export default function Denunciar() {
  const [contatos, setContatos] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchContatos = async () => {
    try {
      const contatosCollection = collection(db, "Contatos")
      const q = query(contatosCollection)

      const querySnapshot = await getDocs(q)
      const fetchedContatos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setContatos(fetchedContatos)
    } catch (error) {
      console.error("Error fetching contatos:", error)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchContatos()
  }, [])

  return (
    <View className="flex-1 items-center justify-center bg-zinc-100">
      <Header />
      <Text className="uppercase text-xl self-start px-5 font-semibold mb-5">
        contatos importantes:
      </Text>
      <SafeAreaView className="h-[60%] w-screen">
        <ScrollView className="px-10 overflow-auto">
        {isLoading ? (
            <Text className="self-center text-2xl font-semibold">Loading...</Text> // Display "Loading..." while data is being fetched
          ) : (
            contatos.map((contato) => (
              <Contato
                key={contato.id}
                name={contato.contatoNome}
                setor={contato.contatoSetor}
                cargo={contato.contatoCargo}
                numero={contato.contatoNumero}
              />
            ))
          )}

        </ScrollView>
      </SafeAreaView>
      <Footer page="denunciar" />
    </View>
  )
}
