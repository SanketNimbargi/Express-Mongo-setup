//Verification of JWT Web Token

const jwt = require("jsonwebtoken");

const verifyToken = (res, req, next) => {
  const token = req.headers["access-token"];
  if (!token) return res.send("Access Denied");

  try {
    const verify = jwt.verify(token, process.env.SECRET);
    req.user = verify;

    res.send = verify;
  } catch (err) {
    res.status(401).res.send("Invalid Access Token");
  }
};

//verification in seperate file we need to export it
module.exports = verifyToken;
