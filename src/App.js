import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import UserDashboard from "./UserDashboard";
import TransactionDashboard from "./TransactionDashboard";
import ReportsDashboard from "./ReportsDashboard"; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/txn-dashboard" element={<TransactionDashboard />} />
          <Route path="/reports-dashboard" element={<ReportsDashboard />} /> {/* New Route */}
     
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
