import React, { useState } from 'react';
import {
  Button, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("/api/users") // SpringBoot 
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error:', err));
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>User D</h2>
      <Button variant="contained" onClick={fetchUsers}>
        Get User Data
      </Button>

      {users.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Age</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Street</strong></TableCell>
                <TableCell><strong>City</strong></TableCell>
                <TableCell><strong>State</strong></TableCell>
                <TableCell><strong>Zipcode</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address.street}</TableCell>
                  <TableCell>{user.address.city}</TableCell>
                  <TableCell>{user.address.state}</TableCell>
                  <TableCell>{user.address.zipcode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default App;

