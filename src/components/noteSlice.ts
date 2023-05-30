import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
}

interface NoteState {
  notes: Note[];
}

const initialState: NoteState = {
  notes: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: state.notes.length + 1,
        text: action.payload,
        likes: 0,
        dislikes: 0,
      };
      state.notes.push(newNote);
    },
    addLike: (state, action: PayloadAction<number>) => {
      const noteId = action.payload;
      const note = state.notes.find((note) => note.id === noteId);
      if (note) {
        note.likes += 1;
      }
    },
    addDislike: (state, action: PayloadAction<number>) => {
      const noteId = action.payload;
      const note = state.notes.find((note) => note.id === noteId);
      if (note) {
        note.dislikes += 1;
      }
    },
  },
});

export const { addNote, addLike, addDislike } = noteSlice.actions;
export default noteSlice.reducer;
