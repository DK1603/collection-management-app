import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';



function Home() {
  
  const latestItems = [{ id: 1, name: "Item 1", collection: "Books" }];
  const topCollections = [{ id: 1, name: "Top Collection", itemCount: 10 }];

  return (
    <div className="container mt-5">
      <h1>Welcome to the Collection Management App!</h1>
      <div className="latest-items">
        <h2>Latest Items</h2>
        <div className="d-flex flex-wrap">
          {latestItems.map(item => (
            <Card style={{ width: '18rem' }} key={item.id} className="m-2">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Part of the {item.collection} collection.
                </Card.Text>
                <Button variant="primary">Go to item</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="top-collections mt-5">
        <h2>Top Collections</h2>
        {topCollections.map(collection => (
          <Card style={{ width: '18rem' }} key={collection.id} className="m-2">
            <Card.Body>
              <Card.Title>{collection.name}</Card.Title>
              <Card.Text>
                Contains {collection.itemCount} items.
              </Card.Text>
              <Link to={`/collections/${collection.id}`} className="btn btn-primary">View Collection</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;


  