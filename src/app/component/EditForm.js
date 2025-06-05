import React, { useState, useEffect } from "react";
import styles from "../styles/notes.module.css";
import { deleteNote } from "../notesSlice";

const EditForm = ({
  initialMessage = "",
  onSave,
  onCancel,
  title = "Edit Message",
}) => {
  const [message, setMessage] = useState(initialMessage);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setMessage(initialMessage);
    setIsModified(false);
  }, [initialMessage]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isModified) {
      onSave(message);
    }
  };

  return (
    <div className={styles.edit_form_container}>
      <div className={styles.edit_forms}>
        <div className={styles.edit_title}>
          {title && <h3 className={styles.form_title}>{title}</h3>}
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <textarea
              value={message}
              onChange={handleChange}
              placeholder="Edit your message..."
              className={styles.message_input}
              rows={5}
              autoFocus
            />
          </div>

          <div className={styles.form_actions}>
            <button
              type="button"
              onClick={onCancel}
              className={styles.cancel_button}
            >
              Cancel
            </button>

            <button type="submit" className={styles.save_button}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
