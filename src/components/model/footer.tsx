import { Link } from "expo-router";
import { TouchableOpacity, View, Text, Image } from "react-native";

interface FooterProps {
  page?: "home" | "denunciar" | "adicionar";
}

const footerItems = [
  {
    state: "home",
    name: "Denunciar",
    link: "/denunciar",
    icon: require("../../../assets/virar-telefone.png"),
  },
  {
    state: "denunciar",
    name: "Adicionar",
    link: "/adicionar",
    icon: require("../../../assets/adicionaricon.png"),
  },
  {
    state: "adicionar",
    name: "Salvar",
    link: "/denunciar", // Assuming this is correct for "Salvar"
    icon: require("../../../assets/adicionaricon.png"),
  },
];

export default function Footer({ page = "home" }: FooterProps) {
  const activeIndex = footerItems.findIndex((item) => item.state === page);

  return (
    <View className="h-28 bg-green-900 w-screen absolute float-end bottom-0 rounded-t-2xl items-center justify-around flex-row">
      <Link href="/dashboard" asChild>
        <TouchableOpacity
          className="flex w-36 h-14 flex-row items-center bg-green-500/50 rounded-full"
        >
          <Image
            source={require("../../../assets/sair-alt.png")}
            className="w-8 h-8 m-4"
          />
          <Text className="text-white font-semibold text-lg">Home</Text>
        </TouchableOpacity>
      </Link>

      {activeIndex > -1 && (
        <Link href={footerItems[activeIndex].link} asChild>
          <TouchableOpacity
            className="flex w-contain pr-5 h-14 flex-row items-center bg-green-500/50 rounded-full"
          >
            <Image source={footerItems[activeIndex].icon} className="w-8 h-8 m-4" />
            <Text className="text-white font-semibold text-lg">
              {footerItems[activeIndex].name}
            </Text>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
