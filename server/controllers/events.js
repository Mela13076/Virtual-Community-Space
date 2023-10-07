import { pool } from '../config/database.js'


const getEvents = async (req, res) => {
  try {
    //retrieves all rows from the events table and 
    //arragnges them in ascending order based on the id column. 
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCategoryEvents = async (req, res) => {
    const category = req.params.category;
  
    try {
      // Retrieve events based on the category (e.g., Python, webdev, gamedev)
      const results = await pool.query('SELECT * FROM events WHERE location = $1 ORDER BY id ASC', [category]);
      res.status(200).json(results.rows);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}
  
export default {
    getEvents,
    getCategoryEvents,
}
  

// const getPython = async (req, res) => {
//     try {
//       //retrieves all rows from the events table that have location python
//       const results = await pool.query('SELECT * FROM events WHERE location = "python" ORDER BY id ASC;')
//       res.status(200).json(results.rows)
//     } catch (error) {
//       res.status(400).json( { error: error.message } )
//     }
//   }

//   const getWebdev = async (req, res) => {
//     try {
//       //retrieves all rows from the events table that have location webdev
//       const results = await pool.query('SELECT * FROM events WHERE location = "webdev" ORDER BY id ASC;')
//       res.status(200).json(results.rows)
//     } catch (error) {
//       res.status(400).json( { error: error.message } )
//     }
//   }

//   const getGamedev = async (req, res) => {
//     try {
//       //retrieves all rows from the events table that have location gamedev
//       const results = await pool.query('SELECT * FROM events WHERE location = "gamedev" ORDER BY id ASC;')
//       res.status(200).json(results.rows)
//     } catch (error) {
//       res.status(400).json( { error: error.message } )
//     }
//   }

// export default {
//   getEvents,
//   getPython,
//   getWebdev,
//   getGamedev
// }