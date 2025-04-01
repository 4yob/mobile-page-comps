import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>Atividade 08 - Página com Componentes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: 180,
        height: 180,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: "#A52A2A",
        fontWeight: "bold",
        textAlign: "center",
    },
});