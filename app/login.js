import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { Input, Button, Divider } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";
import { Entypo } from "@expo/vector-icons";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    // Validation
    if (!username || !password) {
      Alert.alert("Login failed", "Email and password are required");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://inpark-api-331214075983.herokuapp.com/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        const serverMessage = data.message;
        const message = `An error has occured: ${response.status}, server message: ${serverMessage}`;
        throw new Error(message);
      }

      setTimeout(() => {
        router.push("/(tabs)/home");
      }, 500);
    } catch (error) {
      Alert.alert("Login failed", error.message);
    }
    setLoading(false);
  };

  const logout = async () => {
    try {
      console.log("Sending data:", {
        username,
        password,
      });
      const response = await fetch(
        "http://inpark-api-331214075983.herokuapp.com/logout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      // Handle successful logout here, e.g. navigate to the login screen
    } catch (error) {
      console.log(error);
    }
  };

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
        placeholder="Username"
        leftIcon={<Entypo name="user" size={24} color="green" />}
        onChangeText={(value) => setUsername(value)}
        value={username}
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
        title={loading ? "Signing in..." : "Sign in"}
        buttonStyle={styles.button}
        onPress={() => {
          router.push("/(tabs)/home");
        }}
        disabled={loading}
      >
        {loading && <ActivityIndicator color="#fff" />}
      </Button>
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
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text>Want to leave?</Text>
        <Text onPress={logout} style={{ color: "green" }}>
          Logout
        </Text>
      </View>
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
