// a chequear

/*const jwt = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();

class Token {
  static createToken(req, res) {
    const encode = {
      email: user.email,
      createdAt: moment().unix(),
      expiredAt: moment().add(24, "hours").unix(),
    };
    res.json(jwt.encode(encode, process.env.SECRET));
  }

  static checkToken(req, res, next) {
    const { headers } = req;
    if (!headers["user-token"]) {
      return res.json({ error: "Token is required" });
    }

    const userToken = headers["user-token"];

    try {
      const encode = jwt.decode(userToken, process.env.SECRET);
      if (encode.expiredAt < moment().unix()) {
        return res.json({ error: "Token has expired" });
      }
      next();
    } catch (error) {
      return res.json({ error: "Incorrect token" });
    }
  }
}

module.exports = Token;
*/