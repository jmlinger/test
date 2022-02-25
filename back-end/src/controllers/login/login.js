const loginServices = require('../../services/login/login');
 
const login = async (req, res, _next) => {
  const user = req.body;

  const result = await loginServices(user);

  return res.status(result.status)
  .json(result.message);
};

module.exports = login;