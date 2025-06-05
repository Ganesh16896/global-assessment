import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: (title, message) => {
        return {
          payload: {
            id: nanoid(),
            title,
            message,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateNote: (state, action) => {
      const { id, title, message } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.message = message;
      }
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export const selectAllNotes = (state) => state.notes.notes;

export default notesSlice.reducer;
