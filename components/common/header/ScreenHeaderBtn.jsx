import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./screenheader.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const ScreenHeaderBtn = ({ icon, uri, dimension, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
            <Image
                resizeMode="contain"
                source={icon ? icon : { uri: uri }}
                style={styles.btnImg(dimension)}
            ></Image>
        </TouchableOpacity>
    );
};

export default ScreenHeaderBtn;
