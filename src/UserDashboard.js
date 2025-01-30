import React, { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function UserDashboard() {
  // Hardcoded User Data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", registration_date: "2023-01-01" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", registration_date: "2023-02-15" },
    { id: 3, name: "Sam Wilson", email: "samwilson@example.com", registration_date: "2023-03-10" },
  ]);

  // Optional: Use useEffect to simulate data refresh (e.g., every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      // You can simulate updating user data if needed, like adding a timestamp.
      const newUserData = users.map(user => ({
        ...user,
        registration_date: new Date().toLocaleString(),
      }));
      setUsers(newUserData);  // Update users with new data
    }, 5000); // Refresh every 5 seconds
    
    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Registration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registration_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={() => setUsers([...users])}>
        Refresh Data
      </Button>
    </div>
  );
}
