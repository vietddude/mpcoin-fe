import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MenuButtonProps {
  onPress: () => void;
  style: any;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.menuButton,
        pressed && styles.menuButtonPressed,
        style,
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <Ionicons
          name="menu-outline"
          size={28}
          color={pressed ? "#4F8EF7" : "gray"}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
  menuButtonPressed: {
    backgroundColor: "rgba(79, 142, 247, 0.2)", // Light blue background when pressed
  },
});

export default MenuButton;
