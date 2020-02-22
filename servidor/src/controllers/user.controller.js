const User = require("../models/Users");

async function loginUser(req, res) {
  const user_email = req.body.user_email;
  const user_pass = req.body.user_pass;

  User.Users.findAll().then(resultado => {
    resultado.forEach(element => {
      if (element.user_email === user_email && element.user_pass == user_pass) {
        res.status(200).json({
          ok: true,
          mensaje: "Encontrado"
        });
      }
    });
    return res.status(500).json({
      ok: false,
      mensaje: "No encontrado"
    });
  });
}

async function getUser(req, res) {
  try {
    const users = await User.Users.findAll();
    res.json({
      data: users
    });
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  const { user_name, user_lastname, user_email, user_pass } = req.body;
  try {
    let newUser = await User.Users.create(
      {
        user_name,
        user_lastname,
        user_email,
        user_pass
      },
      {
        fields: ["user_name", "user_lastname", "user_email", "user_pass"]
      }
    );
    if (newUser) {
      res.json({
        message: "User created successfully",
        data: newUser
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something goes wrong",
      data: {}
    });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const deleteUser = await User.destroy({
    where: {
      id
    }
  });
  res.json({
    message: "User deleted succesfully",
    count: deleteUser
  });
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { user_name, user_lastname, user_email, user_pass } = req.body;
  const users = await User.findAll({
    attributes: ["id", "user_name", "user_lastname", "user_email", "user_pass"],
    where: {
      id
    }
  });

  if (users.length > 0) {
    users.forEach(async user => {
      await user.update({
        user_name,
        user_lastname,
        user_email,
        user_pass
      });
    });
  }

  return res.json({
    message: "User updated succesfully",
    data: users
  });
}

// async function getUserByRol(req, res) {
//   const { id_rol } = req.params;
//   const users = await User.findAll({
//     attributes: ["id", "user_name", "user_lastname", "user_email", "user_pass"],
//     where: {
//       id_rol
//     }
//   });
//   res.json({ users });
// }

module.exports = {
  loginUser,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
