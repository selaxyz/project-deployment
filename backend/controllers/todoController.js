const { client } = require('../database/connection');

exports.getAllTodos = (req, res) => {
  client.query('SELECT * FROM todo', (err, result) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong with the server',
      });
    } else {
      res.status(200).json({
        status: 'success',
        results: result.rowCount,
        data: {
          todos: result.rows,
        },
      });
    }
  });
};