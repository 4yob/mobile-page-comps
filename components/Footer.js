import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>2TDS1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
    },
    title: {
        fontSize: 24,
        color: "#A52A2A",
        fontWeight: "bold",
        textAlign: "center",
    },
});