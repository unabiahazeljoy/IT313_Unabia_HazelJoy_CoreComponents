# IT313 Lab 6 - Student Directory Viewer

## The Problem

The IT313 registrar gave a list of students who need academic advising this term. This Expo (React Native) app lets an adviser browse and search that list. Each student is shown as a card with their photo, name, and year level, and a "Flag for Advising" button that visibly changes when pressed and when toggled on. Typing in the search box narrows the visible cards to names that match.

## Component Structure

- **StudentCard** - receives `id`, `name`, `year`, `photoUrl`, `flagged`, and `onToggleFlag` as props. A `View` (Flexbox row) holds an `Image` with a fixed size and rounded corners, two `Text` elements, and a `Pressable` whose style is a function of `{ pressed }` and whose color follows `flagged`.

- **StudentDirectory** - keeps the `students` array and the `query` text in state. It renders a controlled `TextInput` (`value` + `onChangeText`) above a `ScrollView`, filters the students by name (case-insensitive), and renders one `StudentCard` per match using `.map()` with `key={student.id}`. It also owns `toggleFlag`, which updates one student's `flagged` value by id.

- **src/app/index.tsx** - the app entry screen that renders `StudentDirectory`.

## How to Run

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go, or press `w` for web / `a` for an Android emulator.
