import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  NativeModules,
  Image,
  Animated,
} from "react-native";
import ProgressBar from "./welcomeProgress";

export default function App() {
  const LogoFadeIn = (props) => {
    const n = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(n, {
        toValue: 1,
        duration: 4000,
      }).start();
    }, [n]);

    return (
      <Animated.View style={{ opacity: n }}>{props.children}</Animated.View>
    );
  };

  return (
    <View style={styles.Screen}>
      <View>
        <LogoFadeIn>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../logo/groupFinal_logo_proto.png")}
            alt="Logo"
          />
        </LogoFadeIn>
      </View>
      <ProgressBar progress={50} max={100} min={0} borderColor={"white"} />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "navy",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
