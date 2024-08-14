const { client } = require("../database/connection");

exports.getAllTodos = (req, res) => {
  client.query("SELECT * FROM todo", (err, result) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message: "Something went wrong with the server",
      });
    } else {
      res.status(200).json({
        status: "success",
        results: result.rowCount,
        data: {
          todos: result.rows,
        },
      });
    }
  });
};

exports.addTodo = (req, res) => {
  try {
    const { title, description: desc } = req.body;
    console.log(title, desc);
    client.query(
      `INSERT INTO todo("title","description") VALUES('${title}', '${desc}');`,
      (err, result) => {
        console.log(result);
        if (err) {
          res.status(500).json({
            status: "error",
            message: err,
          });
        } else {
          const todo = req.body;
          res.status(200).json({
            status: "success",
            results: result.rowCount,
            data: {
              todo,
            },
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
