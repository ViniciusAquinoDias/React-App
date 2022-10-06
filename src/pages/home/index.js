import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get("screen").width;

export default function Home() {
  return (
    <>
      <ScrollView>
        <View style={styles.fluot}>
        <Text style={{color: '#f9f9f9', fontWeight: '700'}}>Detalhes da Compra</Text>
        <TouchableOpacity><AntDesign name="leftcircleo" size={43} color="#f9f9f9" /></TouchableOpacity>
        </View>

        <Image
          source={require("../../../assets/topo.png")}
          style={{
            position: "relative",
            width: "100%",
            height: (578 / 768) * width,
          }}
        />

        <View style={{ paddingHorizontal: 5 }}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Cesta de Verduras
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/logo.png")}
                style={{ width: 40, height: 40, marginRight: 10, padding: 10 }}
              />
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Jack Jackson Farms
              </Text>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ lineHeight: 20, fontSize: 14, fontWeight: "300" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#009dc4",
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              R$: 76,80
            </Text>

            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: "#009dc4",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>Comprar</Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 16,
                fontWeight: "400",
                marginBottom: 16,
              }}
            >
              Itens:
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: 16,
                backgroundColor: '#f9f9f9'
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../assets/frutas/Batata.png")}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
                <Text>8 Batatas</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../assets/frutas/Brócolis.png")}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
                <Text>1 Brócolis</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../assets/frutas/Abóbora.png")}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
                <Text>3 Abóboras</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../assets/frutas/Pepino.png")}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
                <Text>2 Pepinos</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../assets/frutas/Tomate.png")}
                  style={{ height: 80, width: 80, marginBottom: 8 }}
                />
                <Text>1 Tomate</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  fluot: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    position: "absolute",
    top: 35,
    color: '#f9f9f9',
    left: 10,
    zIndex: 1,
    fontWeight: "bold",
  },
});
