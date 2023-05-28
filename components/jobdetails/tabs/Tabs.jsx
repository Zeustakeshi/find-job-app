import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={styles.btn(item, activeTab)}
                            onPress={() => setActiveTab(item)}
                        >
                            <Text style={styles.btnText(item, activeTab)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
            />
        </View>
    );
};

export default Tabs;
