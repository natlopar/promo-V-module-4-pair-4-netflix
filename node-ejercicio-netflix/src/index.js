const express = require('express');
const cors = require('cors');
const mysql = require ('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({limit: "25mb"}));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//conexion BD
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'adalab2024', 
    database: 'netflix'
  });
  connection.connect();
  return connection;
};

//endpoints

server.get('/api/movies', async (req,res) => {
  console.log(req.query.genre)
  const genreFilterParam = req.query.genre;
  const conex= await getConnection();
  const sql = 'SELECT * FROM movies WHERE genre = ?';
  const [results, fields] = await conex.query(sql, [genreFilterParam]);
  console.log(results);
  console.log(fields);
  res.json({success: true, movies: results});
  console.log(res);
})