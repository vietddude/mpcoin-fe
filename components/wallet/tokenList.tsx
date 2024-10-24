import React from "react";
import { FlatList } from "react-native";
import TokenItem from "./tokenItem";
import { TokenItem as TokenItemType } from "./types";

interface TokenListProps {
  tokens: TokenItemType[];
}

const TokenList: React.FC<TokenListProps> = ({ tokens }) => (
  <FlatList
    data={tokens}
    renderItem={({ item }) => <TokenItem item={item} />}
    keyExtractor={(item) => item.symbol}
  />
);

export default TokenList;
