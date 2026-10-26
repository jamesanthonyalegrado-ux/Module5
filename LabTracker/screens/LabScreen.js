import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../hooks/usestopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);   // functional update
  const handleReset = () => setSolved(0);              // does not touch the timer
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={styles.container}>
      <PracticeTracker solved={solved} onSolve={handleSolve} onReset={handleReset} />

      <Stopwatch seconds={seconds} isRunning={isRunning} />
      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" onPress={handleStop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  row: { flexDirection: "row", justifyContent: "center", gap: 12 },
});