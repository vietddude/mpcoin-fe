import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./header";
import TabBar from "./tabBar";
import TokenList from "./tokenList";
import { TokenItem } from "./types";
import Sidebar from "../sidebar/sidebarMenu";
import { BlurView } from "expo-blur";
const WalletScreen: React.FC = () => {
  const walletAddress = "0x38ae...b895";
  const walletBalance = "3.77 Gwei";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const tokens: TokenItem[] = [
    {
      symbol: "ETH",
      price: 2397.12,
      priceChange: -3.25,
      balance: 0,
      iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      symbol: "USDC",
      price: 1.0,
      priceChange: 0.01,
      balance: 0,
      iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    },
    {
      symbol: "USDT",
      price: 1.0,
      priceChange: 0.01,
      balance: 0,
      iconUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header walletAddress={walletAddress} walletBalance={walletBalance} />
      {isSidebarOpen && (
        <View style={styles.overlay}>
          <BlurView intensity={10} style={StyleSheet.absoluteFill}>
            <Sidebar />
          </BlurView>
        </View>
      )}
      <TabBar />
      <TokenList tokens={tokens} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
});

export default WalletScreen;
