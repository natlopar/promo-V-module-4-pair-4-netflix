const express = require('express');
const cors = require('cors');
const mysql = require ('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

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
    password: 'root24', 
    database: 'netflix'
  });
  connection.connect();
  return connection;
};

//endpoints
server.get('/movie/:movieId', async (req, res) => { 
  console.log(req.params.movieId);
  const idFilterParam = req.params.movieId;
  const conex= await getConnection();
  const sql = 'SELECT * FROM movies WHERE idMovies = ?';
  const [results, fields] = await conex.query(sql, [idFilterParam]);
  
  res.render('movies', {movies: results[0]} );
  console.log(results);  
  });


server.get('/api/movies', async (req,res) => {
  const genreFilterParam = req.query.genre;
  const conex= await getConnection();
  const sql = 'SELECT * FROM movies WHERE genre = ?';
  const [results, fields] = await conex.query(sql, [genreFilterParam]);
  res.json({success: true, movies: results});
});




const staticServerPathWeb = './src/public-react'; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));