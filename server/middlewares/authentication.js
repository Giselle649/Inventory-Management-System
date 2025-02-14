const { decode } = require("../helpers/jwt");
const { Member } = require('../models')

const authentication = async (req, res, next) => {
    try {
        //! 1.take the token
        const { authorization } = req.headers;

        //!2.check token
        //!2a.check if member send the token or not 
        if (!authorization) {
        throw new Error("Unauthorized");
        }

        //!2b.check if token valid or not / if token is made by our RESTAPI or not
        const access_token = authorization.split(" ")[1];
        
        const payload = decode(access_token);

        // console.log(payload) = { id: 9, username: 'mama', iat: 1739491274 }
        
        const member = await Member.findByPk(payload.id);

        if (!member) {
            throw new Error("Unauthorized");
        }

        //!3.send member's info to other middlewares so that data that is sent to client is personalized/suitable
        const { id, username, PermissionId } = payload;

        req.loginInfo = {
            id,
            username,
            PermissionId
        };

        next();
    } catch (err) {
        //next(err)
        // res.send(err)
        console.log(err)
    }

}

module.exports = authentication;