import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { icons } from "../constants";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerTitleAlign: "center",
                    headerTitle: "",
                    headerLeft: () => {
                        return (
                            <ScreenHeaderBtn
                                icon={icons.menu}
                                dimension="60%"
                            />
                        );
                    },
                    headerRight: () => {
                        return (
                            <ScreenHeaderBtn
                                uri="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                dimension="100%"
                            />
                        );
                    },
                    animation: "none",
                }}
            ></Stack.Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
            >
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome></Welcome>
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs></Nearbyjobs>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
