import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";

import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import { useRouter } from "expo-router";
const x = {
    job_id: "asdasdsadasds",
    employer_name: "GeoComply",
    employer_logo:
        "https://vtlogo.com/wp-content/uploads/2021/11/geocomply-solutions-inc-vector-logo.png",
    employer_website: "http://www.geocomply.com",
    job_employment_type: "FULLTIME",
    job_title: "Back-End Web Developer, Python",
    job_city: "Hồ Chí Minh",
};

const Nearbyjobs = () => {
    // const { loading, data, error } = useFetch("search", {
    //     query: "Node devloper in Viet Nam",
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
                    data.map((item, index) => {
                        return (
                            <NearbyJobCard
                                onPress={() => router.push(`job-detail/1`)}
                                key={index}
                                data={item}
                            ></NearbyJobCard>
                        );
                    })
                )}
            </View>
        </View>
    );
};

export default Nearbyjobs;
