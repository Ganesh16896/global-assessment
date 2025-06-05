import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../notesSlice";
import { LuNotebookPen } from "react-icons/lu";

import styles from "../styles/notes.module.css";

const NoteForm = ({ noteToEdit, setNoteToEdit, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [message, setMessage] = useState(noteToEdit?.message || "");

  console.log(dispatch);

  useState(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setMessage(noteToEdit.message);
      setIsOpen(true);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (noteToEdit) {
      dispatch(updateNote({ id: noteToEdit.id, title, message }));
      // setNoteToEdit(null);
      setIsOpen(true);
    } else {
      dispatch(addNote(title, message));
      setIsOpen(false);
    }
    setTitle("");
    setMessage("");
    setIsOpen(false);
    if (noteToEdit) setNoteToEdit(null);
  };

  const togglePopup = () => {
    if (isOpen) {
      resetForm();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.note_form}>
      <button onClick={togglePopup} className={styles.popup_button}>
        <LuNotebookPen className={styles.icon} />
      </button>

      {isOpen && (
        <div className={styles.popup_overlay}>
          <div className={styles.popup_content}>
            <div className={styles.popup_title}>
              <h3>Add Notes</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Note message"
                required
              />
              <div className={styles.add_btns}>
                <button type="submit">Add Note</button>
                <button onClick={togglePopup} className={styles.close_button}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteForm;
