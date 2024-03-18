const mongoose = require('mongoose'); 

// Use an environment variable or hardcode the connection string
const DB = "mongodb://localhost:27017/test";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection to MongoDB successful!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
