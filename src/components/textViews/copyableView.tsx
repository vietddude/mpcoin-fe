import React, { PropsWithChildren, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Snackbar, PaperProvider } from "react-native-paper";

type Props = {
  label?: string;
  disabled?: boolean;
  onCopyPressed: () => void;
};

export const CopyableView: React.FunctionComponent<
  PropsWithChildren<Props>
> = ({ label, disabled, children, onCopyPressed }) => {
  const [visible, setVisible] = useState(false);

  const onCopy = () => {
    onCopyPressed();
    setVisible(true);
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  return (
    <PaperProvider>
      <View style={styles.viewContainer}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <Pressable
          style={styles.container}
          disabled={disabled}
          onPress={onCopy}
        >
          {children}
        </Pressable>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={Snackbar.DURATION_SHORT}
        >
          {`The ${label ?? "text"} is copied to the clipboard!`}
        </Snackbar>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    gap: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  copiedText: {
    color: "#FFF",
    fontWeight: "600",
  },
  copiedView: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#474E68",
  },
});
