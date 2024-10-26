import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Pressable,
} from "react-native";
import Button from "./Button";
import { authApi } from "@/src/api/endpoints";
import { AxiosError } from "axios";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const setErrorsWithTimeout = (newErrors: string[]) => {
    setErrors(newErrors);
    setTimeout(() => {
      setErrors([]);
    }, 5000); // Clear errors after 5 seconds
  };

  async function performSignup(
    email: string,
    password: string
  ): Promise<string[]> {
    try {
      const response = await authApi.signup({
        email,
        password,
      });
      console.log("response", response);
      return []; // Return an empty array if signup is successful
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        // Handle known API errors
        if (error.response.status === 400) {
          return [error.response.data.message || "Bad request"];
        } else if (error.response.status === 409) {
          return ["Email already exists"];
        } else if (error.response.status === 500) {
          return ["Internal server error"];
        }
      }
      // Handle any other errors
      return ["An unexpected error occurred"];
    }
  }

  function verifyPassword(): string[] {
    const conditions = [
      password.length < 8 ? "Password must be at least 8 characters long" : "",
      password.length > 20 ? "Password must be at most 20 characters long" : "",
      !password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        ? "Password must contain at least one letter and one number"
        : "",
      password !== confirmPassword ? "Passwords do not match" : "",
    ];

    return conditions.filter(Boolean);
  }

  const handleSignup = async () => {
    const validationErrors = verifyPassword();
    if (validationErrors.length === 0) {
      const apiErrors = await performSignup(email, password);
      if (errors.length === 0) {
        console.log("Signup successful");
        // Handle successful signup (e.g., navigate to another screen)
      } else {
        setErrorsWithTimeout(apiErrors);
      }
    } else {
      setErrorsWithTimeout(validationErrors);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 60}
        style={styles.container}
      >
        <Pressable onPress={Keyboard.dismiss} style={styles.pressable}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.topContent}>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>Create your first wallet</Text>
            </View>

            <View style={styles.bottomContent}>
              {errors.length > 0 && (
                <View style={styles.errorContainer}>
                  {errors.map((error, index) => (
                    <Text key={index} style={styles.errorText}>
                      {error}
                    </Text>
                  ))}
                </View>
              )}

              <TextInput
                ref={emailRef}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#A0A0A0"
                value={email}
                onChangeText={setEmail}
                inputMode="email"
                autoCapitalize="none"
                enterKeyHint="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <TextInput
                ref={passwordRef}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#A0A0A0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                enterKeyHint="next"
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              />
              <TextInput
                ref={confirmPasswordRef}
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#A0A0A0"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                enterKeyHint="done"
                onSubmitEditing={handleSignup}
              />

              <Button
                title="Sign Up"
                onPress={handleSignup}
                active={email && password && confirmPassword ? true : false}
              />
            </View>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  topContent: {
    alignItems: "center",
    marginTop: 60,
  },
  bottomContent: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "#4F6EF7",
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#A0A0A0",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#2C2C2E",
    color: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
  },
  errorContainer: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  pressable: {
    flex: 1,
  },
});
