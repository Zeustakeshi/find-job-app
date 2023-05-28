import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pointsContainer}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={styles.pointWrapper}>
                            <View style={styles.pointDot}></View>
                            <Text style={styles.pointText}>{item}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Specifics;
