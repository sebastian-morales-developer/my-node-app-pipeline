const express = require('express');
const app = express();
const myDockerTableModelRoutes = require('./routes/myDockerTableModel');

app.use(express.json());
app.use('/my-docker-table-model', myDockerTableModelRoutes);

app.get('/', (req, res) => {
  res.send(`Welcome to my Node.js + Express + Sequelize API!!!!!!!!! -->>>> ${process.env['API_KEY']}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
