"use client";
import { useSelector, useDispatch } from "react-redux";
import { selectAllNotes, deleteNote, updateNote } from "../notesSlice";
import { useState } from "react";
import { TbEditCircle } from "react-icons/tb";
import NoteForm from "./NoteForm";
import styles from "../styles/notes.module.css";
import EditForm from "./EditForm";
import { MdOutlineDeleteOutline } from "react-icons/md";

const NoteList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedMessage) => {
    if (noteToEdit) {
      dispatch(
        updateNote({
          id: noteToEdit.id,
          title: noteToEdit.title,
          message: updatedMessage,
        })
      );
    }
    setIsEditing(false);
    setNoteToEdit(null);
  };

  const handleEditClick = (note) => {
    setNoteToEdit(note);
    setIsEditing(true);
  };

  return (
    <div className={styles.notes_container}>
      <h2>Your Notes</h2>
      <NoteForm
        noteToEdit={noteToEdit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setNoteToEdit={setNoteToEdit}
      />

      {notes.length === 0 ? (
        <p>No notes yet. Add your Notes</p>
      ) : (
        <div className={styles.notes_grid}>
          {notes.map((note) => (
            <div key={note.id} className={styles.note_card}>
              <div className={styles.subheader}>
                <div>
                  <h3>{note.title}</h3>
                </div>
                <div>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: "8px",
                    }}
                    onClick={() => handleEditClick(note)}
                  >
                    <TbEditCircle style={{ fontSize: "17px" }} />
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      marginTop: "8px",
                    }}
                    onClick={() => dispatch(deleteNote(note.id))}
                  >
                    <MdOutlineDeleteOutline style={{ fontSize: "17px" }} />
                  </button>
                </div>
              </div>

              <div className={styles.message}>
                <p>{note.message}</p>
                <small>{new Date(note.createdAt).toLocaleString()}</small>
              </div>
            </div>
          ))}
        </div>
      )}

      {isEditing && noteToEdit && (
        <EditForm
          initialMessage={noteToEdit.message}
          onSave={handleSave}
          onCancel={() => {
            setIsEditing(false);
            setNoteToEdit(null);
          }}
          title={noteToEdit.title}
        />
      )}
    </div>
  );
};

export default NoteList;
