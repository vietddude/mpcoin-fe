import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TokenItem as TokenItemType } from "./types";

interface TokenItemProps {
  item: TokenItemType;
}

const TokenItem: React.FC<TokenItemProps> = ({ item }) => (
  <View style={styles.tokenItem}>
    <Image source={{ uri: item.iconUrl }} style={styles.tokenIcon} />
    <View style={styles.tokenInfo}>
      <Text style={styles.tokenSymbol}>{item.symbol}</Text>
      <Text style={styles.tokenPrice}>
        ${item.price.toFixed(2)} ({item.priceChange > 0 ? "+" : ""}
        {item.priceChange.toFixed(2)}%)
      </Text>
    </View>
    <View style={styles.tokenBalance}>
      <Text style={styles.balanceText}>{item.balance}</Text>
      <Text style={styles.balanceUSD}>
        ${(item.balance * item.price).toFixed(2)}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  tokenItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  tokenIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  tokenInfo: {
    flex: 1,
  },
  tokenSymbol: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  tokenPrice: {
    color: "gray",
    fontSize: 14,
  },
  tokenBalance: {
    alignItems: "flex-end",
  },
  balanceText: {
    color: "white",
    fontSize: 16,
  },
  balanceUSD: {
    color: "gray",
    fontSize: 14,
  },
});

export default TokenItem;
