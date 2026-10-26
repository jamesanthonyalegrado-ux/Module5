import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.count}>Solved: {solved}</Text>

      <View style={styles.row}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} />
      </View>

      {solved >= 5 && <Text style={styles.great}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 20, alignItems: "center" },
  count: { fontSize: 24, marginBottom: 12 },
  row: { flexDirection: "row", gap: 12 },
  great: { marginTop: 12, fontSize: 18, color: "green", fontWeight: "bold" },
});