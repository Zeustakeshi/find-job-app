import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";
import { useRouter } from "expo-router";

const x = {
    employer_name: "GeoComply",
    employer_logo:
        "https://vtlogo.com/wp-content/uploads/2021/11/geocomply-solutions-inc-vector-logo.png",
    employer_website: "http://www.geocomply.com",
    job_employment_type: "FULLTIME",
    job_title: "Back-End Web Developer, Python",
    job_city: "Hồ Chí Minh",
};

const Popularjobs = () => {
    // const { loading, data, error } = useFetch("search", {
    //     query: "React devloper in Viet Nam",
    // });

    const router = useRouter();

    const loading = false;
    const error = false;
    const data = [x, x, x, x, x];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Việc làm phổ biến</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Tất cả</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {loading ? (
                    <ActivityIndicator size="small" color={COLORS.secondary} />
                ) : error ? (
                    <Text style={styles.errorMessage}>Đã có lỗi xảy ra</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <PopularJobCard
                                    data={item}
                                    onPress={() => router.push(`job-detail/1`)}
                                ></PopularJobCard>
                            );
                        }}
                        keyExtractor={(item, index) => index}
                        horizontal
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
