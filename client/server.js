const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Mock data
const mockKey = 'your_mocked_razorpay_key'; // Replace with your actual Razorpay key
const mockOrder = {
  id: 'your_actual_order_id', // Replace with your actual order ID
  amount: 1000, // Actual order amount in paise
  receipt: 'your_actual_receipt', // Replace with your actual receipt
};

// Mock endpoint to get Razorpay key
app.get('/api/getkey', (req, res) => {
  res.json({ data: { key: mockKey } });
});

// Mock endpoint to get premium data
app.post('/api/getPremium', async (req, res) => {
  try {
    // Simulate an asynchronous operation (e.g., fetching data from a database)
    // Replace this with your actual logic to get premium data
    const data = {
      order: mockOrder,
    };

    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
