import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

function Profile() {
  // Placeholder user information
  const user = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  
  const collections = [{ id: 1, name: 'Book Collection' }];

  return (
    <div className="container mt-5">
      <h1>User Profile</h1>
      <ListGroup className="mb-3">
        <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
        <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
        {/* Add more user details as needed */}
      </ListGroup>
      
      <h2>My Collections</h2>
      <div className="d-flex flex-wrap">
        {collections.map(collection => (
          <Card style={{ width: '18rem' }} key={collection.id} className="m-2">
            <Card.Body>
              <Card.Title>{collection.name}</Card.Title>
              {/* Link to view the collection */}
              <Card.Link href={`/collections/${collection.id}`}>View Collection</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Profile;


  