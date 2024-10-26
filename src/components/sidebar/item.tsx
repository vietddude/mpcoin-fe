import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  isActive?: boolean;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  isActive = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={24} color={isActive ? "#4F8EF7" : "white"} />
      <Text style={[styles.menuText, isActive && styles.activeText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  menuText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
  activeText: {
    color: "#4F8EF7",
  },
});

export default MenuItem;
