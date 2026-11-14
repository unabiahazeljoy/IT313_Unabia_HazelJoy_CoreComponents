import { Pressable, StyleSheet, Text, View } from "react-native";

function StudentCard({ id, name, year, photoUrl, flagged, onToggleFlag }) {
  return (
    <View style={[styles.card, flagged && styles.flaggedCard]}>
      <image source={{ uri: photoUrl }} style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.flagBtn,
            flagged && styles.flagBtnOn,
            pressed && styles.flagBtnPressed,
          ]}
        >
          <Text style={[styles.flagText, flagged && styles.flagTextOn]}>
            {flagged ? "Flagged for Advising" : "Flag for Advising"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#cbd5e1",
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardFlagged: {
    borderLeftColor: "#f59e0b",
    backgroundColor: "#fffbeb",
  },
  photo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 14,
    backgroundColor: "#e2e8f0",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },
  year: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
    marginBottom: 10,
  },
  flagBtn: {
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#c7d2fe",
    backgroundColor: "#ffffff",
  },
  flagBtnOn: {
    backgroundColor: "#f59e0b",
    borderColor: "#f59e0b",
  },
  flagBtnPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.97 }],
  },
  flagText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338ca",
  },
  flagTextOn: {
    color: "#ffffff",
  },
});

export default StudentCard;
