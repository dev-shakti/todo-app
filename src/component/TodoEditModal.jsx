// src/TodoEditModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// TodoEditModal component for editing a todo item
const TodoEditModal = ({ show, handleClose, todo, handleSave }) => {
  const [text, setText] = useState('')

 // useEffect hook to update the local state when the todo changes
  useEffect(() => {
    if (todo) {
      setText(todo.text)// Set the input text to the current todo text
    }
  }, [todo]);
 
   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(todo.id, text);  // Passing the id and new text to the handleSave function
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TodoEditModal;
