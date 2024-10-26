import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import MenuButton from "./menuButton";

interface HeaderProps {
  walletAddress: string;
  walletBalance: string;
}

const Header: React.FC<HeaderProps> = ({ walletAddress, walletBalance }) => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <MenuButton onPress={handleMenuPress} style={styles.menuButton} />
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
          }}
          style={styles.avatar}
        />
        <View style={styles.addressAndBalance}>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{walletAddress}</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Ionicons name="copy-outline" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.balance}>{walletBalance}</Text>
        </View>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="paper-plane-outline" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="scan-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingRight: 15,
  },
  menuButton: {
    marginLeft: -23,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  addressAndBalance: {
    flexDirection: "column",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  copyButton: {
    marginLeft: 8,
  },
  balance: {
    color: "gray",
    fontSize: 14,
    marginTop: 2,
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default Header;
