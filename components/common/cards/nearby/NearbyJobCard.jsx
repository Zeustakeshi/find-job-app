import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ data, onPress = () => {} }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(data)}
            style={styles.container}
        >
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={{
                        uri: checkImageURL(data.employer_logo)
                            ? data.employer_logo
                            : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                    }}
                    resizeMode="contain"
                ></Image>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.companyName} numberOfLines={1}>
                    {data.employer_name}
                </Text>
                <Text style={styles.jobName} numberOfLines={2}>
                    {data.job_title}
                </Text>
                <Text style={styles.jobType}>
                    {data.job_employment_type || "không xác định"}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default NearbyJobCard;
