import React from "react";
import { View, Text, StyleSheet } from "react-native";

const pad = (n) => String(n).padStart(2, "0");

export default function Stopwatch({ seconds, isRunning }) {
  const mm = pad(Math.floor(seconds / 60));
  const ss = pad(seconds % 60);

  return (
    <View style={styles.card}>
      <Text style={styles.time}>{mm}:{ss}</Text>
      <Text>{isRunning ? "Running…" : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 12, alignItems: "center" },
  time: { fontSize: 40, fontVariant: ["tabular-nums"] },
});