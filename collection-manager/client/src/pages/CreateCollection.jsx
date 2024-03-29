import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateCollection() {
  const [collectionName, setCollectionName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement the logic to add the new collection to your data store
  };

  return (
    <div className="container mt-5">
      <h1>Create a New Collection</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
          Collection Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter collection name"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Collection description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Add more inputs for additional fields as needed */}

        <Button variant="primary" type="submit">
          Create Collection
        </Button>
      </Form>
    </div>
  );
}

export default CreateCollection;



  