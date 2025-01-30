import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Pie, Bar, Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement 
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ChartDataLabels);

const ReportsDashboard = () => {
  // **Pie Chart Data (Transaction Status Distribution)**
  const generateBorderColor = (colors, factor = 0.8) => {
    return colors.map(color => {
      const rgba = color.match(/\d+/g).map(Number);
      return `rgba(${Math.round(rgba[0] * factor)}, ${Math.round(rgba[1] * factor)}, ${Math.round(rgba[2] * factor)}, 1)`;
    });
  };
  
  const backgroundColors = [
    "rgba(75, 105, 206, 0.8)",   // Blueish Green
    "rgba(103, 158, 221, 0.8)",  // Light Blue
    "rgba(33, 155, 226, 0.8)",   // Sky Blue
  ];
  
  const pieData = {
    labels: ["Success", "Pending", "Failed"],
    datasets: [
      {
        label: "Transactions",
        data: [60, 25, 15], // Example Data
        backgroundColor: backgroundColors,
        borderColor: generateBorderColor(backgroundColors, 0.6), // Generates darker border colors
        borderWidth: 2,
        hoverOffset: 10, // Increases hover effect
      },
    ],
  };
  // **Pie Chart Options (Modern Look)**
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
      datalabels: {
        color: "white",
        formatter: (value, ctx) => {
          let sum = ctx.dataset.data.reduce((a, b) => a + b, 0);
          let percentage = ((value / sum) * 100).toFixed(1) + "%"; // Show % inside slices
          return percentage;
        },
        font: {
          size: 14,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw} Transactions`;
          },
        },
      },
    },
  };

// Bar Chart Data (Transactions Per Month)
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Transactions per Month",
      data: [120, 190, 300, 250, 210, 340], // Example data
      backgroundColor: [
        "#4CAF50", // Green for Jan
        "#FFC107", // Yellow for Feb
        "#1976d2", // Blue for Mar
        "#F44336", // Red for Apr
        "#8E24AA", // Purple for May
        "#FF5722", // Deep Orange for Jun
      ],
      borderColor: [
        "#388E3C", // Darker Green for Jan
        "#FFB300", // Darker Yellow for Feb
        "#1565C0", // Darker Blue for Mar
        "#D32F2F", // Darker Red for Apr
        "#7B1FA2", // Darker Purple for May
        "#D32F2F", // Darker Deep Orange for Jun
      ],
      borderWidth: 2,
    },
  ],
};

  // Line Chart Data (Transaction Trends Over Time)
  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Successful Transactions",
        data: [30, 50, 80, 70, 100], // Example data
        borderColor: "#4CAF50",
        fill: false,
        tension: 0.3, // Makes the line smooth
      },
      {
        label: "Failed Transactions",
        data: [10, 15, 20, 18, 30], // Example data
        borderColor: "#F44336",
        fill: false,
        tension: 0.3, // Makes the line smooth
      },
    ],
  };

  return (
    <Card sx={{ p: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Reports & Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Overview of transactions and trends.
        </Typography>

        <Grid container spacing={4}>
          {/* First Row: Four Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                AEPS
              </Typography>
              <Typography variant="body1">Content for AEPS</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                MATM
              </Typography>
              <Typography variant="body1">Content for MATM</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                DMT
              </Typography>
              <Typography variant="body1">Content for DMT</Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                Prepaid
              </Typography>
              <Typography variant="body1">Content for Prepaid</Typography>
            </Card>
          </Grid>

          {/* Second Row: Pie, Bar, and Line Charts */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                Transaction Status Distribution
              </Typography>
              <div style={{ height: "300px" }}>
                <Pie data={pieData} />
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                Transactions Per Month
              </Typography>
              <div style={{ height: "300px" }}>
                <Bar data={barData} />
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 4 }}>
              <Typography variant="h6" gutterBottom>
                Weekly Transaction Trends
              </Typography>
              <div style={{ height: "300px" }}>
                <Line data={lineData} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReportsDashboard;
