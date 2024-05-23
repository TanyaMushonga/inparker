import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Input, Button, Divider } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    try {
      // Validation
      if (!username || !password || !email || !nationalID || !phoneNumber) {
        Alert.alert("Signup failed", "All fields are required");
        return;
      }

      if (!email.includes("@")) {
        Alert.alert("Signup failed", "Invalid email");
        return;
      }

      if (password.length < 8) {
        Alert.alert("Signup failed", "Password must be at least 8 characters");
        return;
      }
      setLoading(true);
      const response = await fetch(
        "http://inpark-api-331214075983.herokuapp.com/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            email,
            nationalID,
            first_name: "tany",
            last_name: "mushonga",
            phone_number: phoneNumber,
          }),
        }
      );



      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      Alert.alert("Signup successful", "You have successfully signed up");
      setUsername("");
      setPassword("");
      setEmail("");
      setNationalID("");
      setPhoneNumber("");

      // Navigate to login page after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      Alert.alert("Signup failed", error.message);
      return;
    }
    setLoading(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="user-plus" size={130} color="green" />
        </View>
        <Input
          placeholder="National ID"
          leftIcon={<AntDesign name="idcard" size={24} color="green" />}
          onChangeText={(value) => setNationalID(value)}
          value={nationalID}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Username"
          leftIcon={<FontAwesome name="user" size={24} color="green" />}
          onChangeText={(value) => setUsername(value)}
          value={username}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Email"
          leftIcon={<FontAwesome name="envelope" size={24} color="green" />}
          onChangeText={(value) => setEmail(value)}
          value={email}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Phone Number"
          leftIcon={<FontAwesome name="phone" size={24} color="green" />}
          onChangeText={(value) => setPhoneNumber(value)}
          value={phoneNumber}
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
          <Text>Already have account? </Text>
          <Link href={"/login"} style={{ color: "green" }}>
            Login
          </Link>
        </View>
        <Button
          title={loading ? "Signing up..." : "Signup"}
          buttonStyle={styles.button}
          onPress={signup}
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
          title="Sign up with Google"
          buttonStyle={styles.googleButton}
          icon={<FontAwesome name="google" size={24} color="white" />}
        />
        <Button
          title="Sign up with Facebook"
          buttonStyle={styles.facebookButton}
          icon={<FontAwesome name="facebook" size={24} color="white" />}
        />
      </View>
    </ScrollView>
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

export default Signup;
