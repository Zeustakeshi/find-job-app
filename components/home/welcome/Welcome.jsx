import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = [
    "toàn thời gian",
    "bán thời gian",
    "thực tập",
    "việc làm online",
];

const Welcome = () => {
    const [activeJobType, setActiveJobType] = useState("toàn thời gian");
    const router = useRouter();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Xin Chào Minh Hieu</Text>
                <Text style={styles.welcomeMessage}>
                    Tìm Việc phù hợp cho bạn
                </Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        autoFocus={false}
                        placeholder="Bạn đang tìm việc trong lĩnh vực nào?"
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Image
                        source={icons.search}
                        style={styles.searchBtnImage}
                        resizeMode="contain"
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                // router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                ></FlatList>
            </View>
        </View>
    );
};

export default Welcome;
