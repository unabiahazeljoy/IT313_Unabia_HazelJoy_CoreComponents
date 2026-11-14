import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import StudentCard from "./StudentCard";

const starterStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
  },
];

function StudentDirectory() {
  const [students, setStudents] = useState(
    starterStudents.map((s) => ({ ...s, flagged: false })),
  );

  const [query, setQuery] = useState("");

  const toggleFlag = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, flagged: !s.flagged } : s)),
    );
  };
  const visibleStudents = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()),
  );
  const flaggedCount = students.filter((s) => s.flagged).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>IT313 • ACADEMIC ADVISING</Text>
          <Text style={styles.title}>Student Directory</Text>
        </View>

        <View style={styles.countPill}>
          <Text style={styles.countNumber}>{flaggedCount}</Text>
          <Text style={styles.countLabel}>flagged</Text>
        </View>
      </View>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search students by name..."
        placeholderTextColor="#94a3b8"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.search}
      />

      <Text style={styles.meta}>
        {`Showing ${visibleStudents.length} of ${students.length} students`}
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.list}
      >
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {visibleStudents.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              {`No students match "${query}"`}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingTop: 56,
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4338ca",
    borderRadius: 22,
    padding: 20,
    marginBottom: 14,
    shadowColor: "#4338ca",
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#c7d2fe",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
  },
  countPill: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  countNumber: {
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
  },
  countLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#e0e7ff",
  },
  search: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#c7d2fe",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: "#0f172a",
  },
  meta: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748b",
    marginTop: 10,
    marginBottom: 12,
  },
  list: {
    paddingBottom: 32,
  },
  empty: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 24,
  },
  emptyText: {
    fontSize: 15,
    color: "#64748b",
  },
});

export default StudentDirectory;
