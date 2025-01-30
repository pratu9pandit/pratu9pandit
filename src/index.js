import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component that holds the routes and layout
import "./index.css"; // Optional for global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <App /> {/* App component will handle the routing */}
    
  </React.StrictMode>
);
