const jwt = require("jsonwebtoken");

class Token {
    static create(DNI, roleId) {

        const accessToken = jwt.sign(
            { DNI: DNI, roleId: roleId },
            process.env.SECRET,
            {
                expiresIn: 86400, // 24 hours
            }
        );
        return accessToken;
    }
    static verify(accessToken) {
        try {
            return jwt.verify(accessToken, process.env.JWT_SECRET)
        } catch (e) {
            return null
        }
    }
    static decode(headers) {
        return jwt.decode(headers['accessToken'], { complete: true })
    }
}

module.exports = Token;
