import React from 'react';
import { Button, Table } from 'react-bootstrap';

function AdminDashboard() {
  // Placeholder data, replace with actual admin functionalities
  const users = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {}
                <Button variant="warning" size="sm" className="me-2">Edit</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Further implementation of admin functionalities */}
    </div>
  );
}

export default AdminDashboard;

  