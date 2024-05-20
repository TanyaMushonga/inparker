import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Divider } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="user" size={150} color="green" />
      </View>
      <Input
        placeholder="Email"
        leftIcon={<FontAwesome name="envelope" size={24} color="green" />}
        onChangeText={(value) => setEmail(value)}
        value={email}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Password"
        leftIcon={<FontAwesome name="lock" size={24} color="green" />}
        onChangeText={(value) => setPassword(value)}
        value={password}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={true}
        inputStyle={styles.input}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text>Don't have account? </Text>
        <Link href={"/signup"} style={{ color: "green" }}>
          create one
        </Link>
      </View>
    
      <Button
        title="Login"
        buttonStyle={styles.button}
        onPress={() => {
          router.push("/(tabs)/home");
        }}
      />
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.text}>Or</Text>
        <View style={styles.line} />
      </View>

      <Button
        title="Sign in with Google"
        buttonStyle={styles.googleButton}
        icon={<FontAwesome name="google" size={24} color="white" />}
      />
      <Button
        title="Sign in with Facebook"
        buttonStyle={styles.facebookButton}
        icon={<FontAwesome name="facebook" size={24} color="white" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: wp("10%"),
  },
  title: {
    fontSize: wp("5%"),
    color: "green",
    textAlign: "center",
    marginBottom: hp("5%"),
  },
  input: {
    color: "green",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingLeft: wp("5%"),
    gap: hp("2%"),
  },
  button: {
    backgroundColor: "green",
    marginTop: hp("2%"),
  },
  googleButton: {
    backgroundColor: "#db4437",
    marginTop: hp("2%"),
    flexDirection: "row",
    gap: wp("2%"),
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    marginTop: hp("2%"),
    flexDirection: "row",
    gap: wp("2%"),
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  text: {
    width: 50,
    textAlign: "center",
  },
});

export default Login;
