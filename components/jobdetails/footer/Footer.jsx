import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useRouter } from "expo-router";

const Footer = ({ url }) => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
                <Image
                    resizeMode="contain"
                    style={styles.likeBtnImage}
                    source={icons.heartOutline}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL(url)}
                style={styles.applyBtn}
            >
                <Text style={styles.applyBtnText}>Ứng tuyển ngay</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
