import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  href?: string;
  disabled?: boolean;
  active?: boolean;
  type?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  href,
  disabled,
  active,
  type,
}) => {
  const navigation = useNavigation();

  const buttonStyles = ({ pressed }: { pressed: boolean }) => [
    styles.button,
    active ? styles.activeButton : styles.inactiveButton,
    type === "primary" && styles.primaryButton,
    type === "secondary" && styles.secondaryButton,
    type === "outline" && styles.outlineButton,
    disabled && styles.disabledButton,
    pressed && !disabled && styles.pressedButton,
  ];

  const handlePress = () => {
    if (disabled) return;
    if (href) {
      navigation.navigate(href as never);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.linkContainer}>
      <Pressable style={buttonStyles} onPress={handlePress} disabled={disabled}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    width: "100%", // Full width
    alignItems: "center", // Center content
  },
  button: {
    backgroundColor: "#2C2C2E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%", // Full width inside container
    alignItems: "center", // Center text and content
  },
  activeButton: {
    backgroundColor: "#4F6EF7",
  },
  inactiveButton: {
    backgroundColor: "#2C2C2E",
    borderColor: "transparent",
  },
  pressedButton: {
    backgroundColor: "#3A3A3C",
  },
  disabledButton: {
    backgroundColor: "#2C2C2E", // Gray color for disabled button
    borderColor: "transparent",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#4F6EF7",
  },
  secondaryButton: {
    backgroundColor: "#2C2C2E",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#4F6EF7",
  },
});

export default Button;
