import React from "react";
import { Drawer } from "expo-router/drawer";
import { useNavigation } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SidebarMenu from "@/src/components/sidebar/sidebarMenu";

function CustomDrawerContent(props: any) {
  return <SidebarMenu {...props} />;
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#1C1C1E",
            width: "80%",
          },
          drawerPosition: "right",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        {/* Add more drawer screens if needed */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
