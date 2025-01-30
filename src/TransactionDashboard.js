import React, { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

export default function TransactionDashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    const newTransactions = [
      { id: 1, amount: 500, status: "Success", time: new Date().toLocaleTimeString() },
      { id: 2, amount: 2000, status: "Pending", time: new Date().toLocaleTimeString() },
      { id: 3, amount: 1500, status: "Failed", time: new Date().toLocaleTimeString() },
    ];
    setTransactions(newTransactions);
  };

  useEffect(() => {
    fetchTransactions();
    const interval = setInterval(fetchTransactions, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Transaction Dashboard
      </Typography>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>₹{txn.amount}</TableCell>
                <TableCell style={{ color: txn.status === "Success" ? "green" : txn.status === "Failed" ? "red" : "orange" }}>
                  {txn.status}
                </TableCell>
                <TableCell>{txn.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Refresh Data
      </Button>
    </div>
  );
}
