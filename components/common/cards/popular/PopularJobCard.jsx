import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ data, selectedJob, onPress = () => {} }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(data)}
            style={styles.container(false, data)}
        >
            <TouchableOpacity style={styles.logoContainer(false, data)}>
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
            <Text style={styles.companyName} numberOfLines={1}>
                {data.employer_name}
            </Text>
            <View style={styles.infoContainer}>
                <Text style={styles.jobName(false, data)} numberOfLines={2}>
                    {data.job_title}
                </Text>
                <Text style={styles.location}>
                    {" "}
                    {data.job_city || "không xác định"}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularJobCard;
