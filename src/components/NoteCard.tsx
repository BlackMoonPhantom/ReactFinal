import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { addNote, addLike, addDislike } from './noteSlice';
import Modal from 'react-modal';
import '../App.css';

const NoteCard = () => {
  const [newNote, setNewNote] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote) {
      dispatch(addNote(newNote));
      setNewNote('');
    }
  };

  const handleLike = (noteId: number) => {
    dispatch(addLike(noteId));
    setModalContent('You liked a review.');
    setShowModal(true);
  };

  const handleDislike = (noteId: number) => {
    dispatch(addDislike(noteId));
    setModalContent('You disliked a review.');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="note-card">
      <h2>Leave a Review:</h2>
      <form onSubmit={handleNoteSubmit} className="form">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your Review..."
          className="note-input"
          rows={4}
        ></textarea>
        <button type="submit" className="note-button">Submit</button>
      </form>

      <h2>Past Reviews</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <p>{note.text}</p>
          <div className="like-buttons">
            <button onClick={() => handleLike(note.id)} className="like-button">
              Like ({note.likes})
            </button>
            <button onClick={() => handleDislike(note.id)} className="dislike-button">
              Dislike ({note.dislikes})
            </button>
          </div>
        </div>
      ))}

    <Modal isOpen={showModal} onRequestClose={handleCloseModal} className="modal">
        <div className="modal-content">
            <h2>Alert</h2>
            <p>{modalContent}</p>
            <button onClick={handleCloseModal}>Close</button>
        </div>
    </Modal>
    </div>
  );
};

export default NoteCard;


