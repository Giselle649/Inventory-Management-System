const {Permission} = require('../models')

class PermissionController {
    static async getAllPermission (req, res, next) {
        try {
            const data = await Permission.findAll()
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async getPermissionById (req, res, next) {
        try {
            const { id } = req.params;
            const data = await Permission.findOne({
                where: {id} 
            })
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async addPermission (req, res, next) {
        try {
            //*ONLY RECEIVE in form of object {name: , page: }

            //! 1.get the permission
            const onePermission = req.body //ada nama & page

            //! 2.create 
            const permission = await Permission.create(onePermission)
            res.status(201).json(permission);
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async updatePermissionById (req, res, next) { //put
        try {
            const { id } = req.params;

            //! 1.check if the member that wants to be updated exist or not
            let checkPermission = await Permission.findByPk(id);

            if (!checkPermission) {
                throw new Error("NotFound");
            }
        
            //! 2.update
            await Permission.update(
                req.body, //object
                {where: { id }}
            )

            // //! 3.send response
            const readPermission = await Permission.findByPk(id);
            res.status(200).json(readPermission);
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }

    // -----------------------------------

    static async deletePermissionById (req, res, next) { //put
        try {
            const { id } = req.params;
        
            //! 1.check if the Permission that wants to be deleted exist or not
            let checkPermission = await Permission.findByPk(id);

            if (!checkPermission) {
                throw new Error("NotFound");
            }

            //! 2.delete
            await Permission.destroy({
                where: {
                    id,
                },
            });
        
            //! 3.send response
            res.status(200).json({
                message: `The permission named '${checkPermission.name}' is successfully deleted`,
                deletedPermissionInfo: checkPermission,
            });
        } catch (err) {
            console.log(err)
            //next(err)
        }
    }
}

module.exports = PermissionController;