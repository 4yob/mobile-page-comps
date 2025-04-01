import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Alejandra Barros</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        color: "#A52A2A",
        fontWeight: "bold",
        textAlign: "center",
    },
});