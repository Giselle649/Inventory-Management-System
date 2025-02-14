const { comparePassword } = require('../helpers/bcrypt');
const { Member, Permission } = require('../models')
const { signToken } = require('../helpers/jwt')

class MemberController {
    static async register(req, res, next) {
        try {
            //* res.send("go in to register")
            
            //!1.take member input and create a new member
            const member = await Member.create({...req.body})

            //* check
            //* res.send(member)
        
            res.status(201).json({
                msg: `Member id ${member.id} successfully created!`
            })
        } catch (error) {
            console.log(error)
            // next(error)

        }
    }

    // -----------------------------------

    static async login(req, res, next) {
        try {
            //! 1.take member input
            const { username, password } = req.body;

            //! 2.check if member fill both username and password or not
            if (!username || !password) {
                throw new Error("Please enter both username & password!");
            }

            //! 3.check if the member's username exist/correct in the database or not & // Convert sequelize object to plain object
            const member = await Member.findOne({
                where: { username: username },
                attributes: ['id', 'username', 'password', 'PermissionId'],
                // include: { 
                //     model: Permission,
                //     attributes: { exclude: ['id', 'name', 'createdAt', 'updatedAt'] }
                // }
            })

            const memberJson = member.toJSON()

            if (!memberJson) {
                throw new Error("Username or Password is wrong");
            }

            // //! 4.check if the member's password correct or not
            //although two user enter the same pass during registration, their hashed pass are different
            if (!comparePassword(password, memberJson.password)) {
                throw new Error("Username or Password is wrong");
            }

            const memberPermission = memberJson.Permission;

            //! 5.generate token
            const payload = {
                id: memberJson.id,
                username: memberJson.username,
                PermissionId: memberJson.PermissionId
            }
            
            const token = signToken(payload);

            // //! 6.Send token as response
            res.status(200).json({ access_token: token });
        } catch (err) {
            console.log(err)
            // console.log(err.message)
            // res.send(err.message)
        }
    }

    // -----------------------------------

    static async getMemberPermission(req, res, next) { //for authorisation & client(so need router)
        try {
            const {id} = req.loginInfo
            const data = await Member.findOne({
                where: {id},
                attributes: ['PermissionId', 'password'],
            })
            const allPermission = await Permission.findOne({
                where: {id: data.PermissionId},
                attributes: {exclude: ['id', 'name', 'createdAt', 'updatedAt']}
            })

            // Convert sequelize object to plain object
            const permissionObj = allPermission.toJSON()

            // let outerArr = [];
            // let innerArr = [];
            // for (const pageName in permissionObj) {
            //     innerArr = []
            //     innerArr.push(pageName)
            //     innerArr.push(permissionObj[pageName])
            //     outerArr.push(innerArr)
            // }

            res.status(200).json(permissionObj)
        } catch (err) {
            console.log(err)
            // next(err)
        }
    }

    // -----------------------------------

    static async getAllMember(req, res, next) {
        try {
            const data = await Member.findAll({
                attributes: {exclude: ["password"]}
            })
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
            // next(err)
        }
    }

    // -----------------------------------

    static async getMemberById(req, res, next) {
        try {
            const { id } = req.params;

            const data = await Member.findOne({
                where: {id},
                attributes: {exclude: ["password"]}
            })
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async updateMemberById(req, res, next) { //put
        try {
            //*the req.body should be object where the property must be the same like database

            const { id } = req.params;

            //! 1.check if the member that wants to be updated exist or not
            let checkMember = await Member.findByPk(id);

            if (!checkMember) {
                throw new Error("NotFound");
            }
        
            //! 2.update
            await Member.update(
                req.body, //object
                {where: { id }}
            )

            // //! 3.send response
            const readMember = await Member.findByPk(id);
            res.status(200).json(readMember);
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async deleteMemberById(req, res, next) { 
        try {
            const { id } = req.params;
      
            //! 1.check if the member that wants to be deleted exist or not
            let checkMember = await Member.findByPk(id);

            if (!checkMember) {
                throw new Error("NotFound");
            }

            //! 2.delete
            await Member.destroy({
              where: {
                id,
              },
            });
      
            //! 3.send response
            res.status(200).json({
              message: `Member with username '${checkMember.username}' successfully deleted`,
              deletedMemberInfo: checkMember,
            });
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }
}
module.exports = MemberController;