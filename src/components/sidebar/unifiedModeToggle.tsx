import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const UnifiedModeToggle: React.FC = () => {
  const [isUnifiedMode, setIsUnifiedMode] = useState(false);

  return (
    <View style={styles.unifiedMode}>
      <Text style={styles.unifiedModeText}>Unified Mode</Text>
      <Switch
        value={isUnifiedMode}
        onValueChange={setIsUnifiedMode}
        trackColor={{ false: "#767577", true: "#4F8EF7" }}
        thumbColor={isUnifiedMode ? "#f4f3f4" : "#f4f3f4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  unifiedMode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  unifiedModeText: {
    color: "white",
    fontSize: 16,
  },
});

export default UnifiedModeToggle;
