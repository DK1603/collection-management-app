import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function Collections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch collections from your backend or use mock data
    setCollections([{ id: 1, name: 'Book Collection' }]);
  }, []);

  return (
    <div className="container mt-5">
      <h1>Collections</h1>
      <div className="d-flex flex-wrap">
        {collections.map(collection => (
          <Card style={{ width: '18rem' }} key={collection.id} className="m-2">
            <Card.Body>
              <Card.Title>{collection.name}</Card.Title>
              <Link to={`/collections/${collection.id}`} className="btn btn-primary">View Collection</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Collections;


  