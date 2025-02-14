
const {Permission} = require("../models")

class Authorization {
    static create = async (req, res, next) => {
        try {
            //! 1.take member's info & the path that member want to go to
            const {PermissionId} = req.loginInfo;

            const oneMemberPermission = await Permission.findOne({
                where: { id: PermissionId },
                attributes: {exclude: ['id', 'name', 'createdAt', 'updatedAt']},
            })

            const allMemberInfo = oneMemberPermission.toJSON()


            const path = req.path;
            //console.log(path); /members/3/permissions string

            let permissionOfAPage = '';
            // LOOP
            for (const eachMemberInfo in allMemberInfo) {
      

                //! 2.check if allMemberInfo's object contain property that has 'page' word inside its name = if yes, remove. If no, loop to next property of 'allMemberInfo' object
                if( eachMemberInfo.includes('Page') ) {
                    let permissionWithoutPageWording = eachMemberInfo.replace('Page', "");
                    console.log(permissionWithoutPageWording)
                
                    if ( path.includes(permissionWithoutPageWording) ) {
                        permissionOfAPage = allMemberInfo[eachMemberInfo]
                    }
                
                }
            }
            // LOOP

            
            if (permissionOfAPage === null) {
                throw new Error('Forbidden1')
            }
            

            if (permissionOfAPage === 'none') {
                throw new Error('Forbidden2')
            } else if (permissionOfAPage.length === 1) {
                if (permissionOfAPage === 'C') {
                    return next()
                } else {
                    throw new Error('Forbidden3')
                }
            } else if (permissionOfAPage && permissionOfAPage.length > 1) {
                let arrOfPermission = permissionOfAPage.split("")
                arrOfPermission.forEach((el) => {
                    if (el === 'C') {
                        return next()
                    }
                })
            }

            throw new Error('Forbidden4')
        } catch(err) {
            console.log(err)
        }
    }

    static read = async (req, res, next) => {
        try {
            //! 1.take member's info & the path that member want to go to
            const {PermissionId} = req.loginInfo;

            const oneMemberPermission = await Permission.findOne({
                where: { id: PermissionId },
                attributes: {exclude: ['id', 'name', 'createdAt', 'updatedAt']},
            })

            const allMemberInfo = oneMemberPermission.toJSON()


            const path = req.path;
            //console.log(path); /members/3/permissions string

            let permissionOfAPage = '';
            // LOOP
            for (const eachMemberInfo in allMemberInfo) {
      

                //! 2.check if allMemberInfo's object contain property that has 'page' word inside its name = if yes, remove. If no, loop to next property of 'allMemberInfo' object
                if( eachMemberInfo.includes('Page') ) {
                    let permissionWithoutPageWording = eachMemberInfo.replace('Page', "");
                    console.log(permissionWithoutPageWording)
                
                    if ( path.includes(permissionWithoutPageWording) ) {
                        permissionOfAPage = allMemberInfo[eachMemberInfo]
                    }
                
                }
            }
            // LOOP

            
            if (permissionOfAPage === null) {
                throw new Error('Forbidden1')
            }
            

            if (permissionOfAPage === 'none') {
                throw new Error('Forbidden2')
            } else if (permissionOfAPage.length === 1) {
                if (permissionOfAPage === 'C' || permissionOfAPage === 'R' || permissionOfAPage === 'U' || permissionOfAPage === 'D' ) {
                    return next()
                } else {
                    throw new Error('Forbidden3')
                }
            } else if (permissionOfAPage && permissionOfAPage.length > 1) {
                let arrOfPermission = permissionOfAPage.split("")
                arrOfPermission.forEach((el) => {
                    if (el === 'C' || el === 'R' || el === 'U' || el === 'D') {
                        return next()
                    }
                })
            }

            throw new Error('Forbidden4')
        } catch(err) {
            console.log(err)
        }
    }

    static update = async (req, res, next) => {
        try {
            //! 1.take member's info & the path that member want to go to
            const {PermissionId} = req.loginInfo;

            const oneMemberPermission = await Permission.findOne({
                where: { id: PermissionId },
                attributes: {exclude: ['id', 'name', 'createdAt', 'updatedAt']},
            })

            const allMemberInfo = oneMemberPermission.toJSON()


            const path = req.path;
            //console.log(path); /members/3/permissions string

            let permissionOfAPage = '';
            // LOOP
            for (const eachMemberInfo in allMemberInfo) {
      

                //! 2.check if allMemberInfo's object contain property that has 'page' word inside its name = if yes, remove. If no, loop to next property of 'allMemberInfo' object
                if( eachMemberInfo.includes('Page') ) {
                    let permissionWithoutPageWording = eachMemberInfo.replace('Page', "");
                    console.log(permissionWithoutPageWording)
                
                    if ( path.includes(permissionWithoutPageWording) ) {
                        permissionOfAPage = allMemberInfo[eachMemberInfo]
                    }
                
                }
            }
            // LOOP

            
            if (permissionOfAPage === null) {
                throw new Error('Forbidden1')
            }
            

            if (permissionOfAPage === 'none') {
                throw new Error('Forbidden2')
            } else if (permissionOfAPage.length === 1) {
                if (permissionOfAPage === 'U') {
                    return next()
                } else {
                    throw new Error('Forbidden3')
                }
            } else if (permissionOfAPage && permissionOfAPage.length > 1) {
                let arrOfPermission = permissionOfAPage.split("")
                arrOfPermission.forEach((el) => {
                    if (el === 'U') {
                        return next()
                    }
                })
            }

            throw new Error('Forbidden4')
        } catch(err) {
            console.log(err)
        }
    }

    static delete = async (req, res, next) => {
        try {
            //! 1.take member's info & the path that member want to go to
            const {PermissionId} = req.loginInfo;

            const oneMemberPermission = await Permission.findOne({
                where: { id: PermissionId },
                attributes: {exclude: ['id', 'name', 'createdAt', 'updatedAt']},
            })

            const allMemberInfo = oneMemberPermission.toJSON()


            const path = req.path;
            //console.log(path); /members/3/permissions string

            let permissionOfAPage = '';
            // LOOP
            for (const eachMemberInfo in allMemberInfo) {
      

                //! 2.check if allMemberInfo's object contain property that has 'page' word inside its name = if yes, remove. If no, loop to next property of 'allMemberInfo' object
                if( eachMemberInfo.includes('Page') ) {
                    let permissionWithoutPageWording = eachMemberInfo.replace('Page', "");
                    console.log(permissionWithoutPageWording)
                
                    if ( path.includes(permissionWithoutPageWording) ) {
                        permissionOfAPage = allMemberInfo[eachMemberInfo]
                    }
                
                }
            }
            // LOOP

            
            if (permissionOfAPage === null) {
                throw new Error('Forbidden1')
            }
            

            if (permissionOfAPage === 'none') {
                throw new Error('Forbidden2')
            } else if (permissionOfAPage.length === 1) {
                if (permissionOfAPage === 'D') {
                    return next()
                } else {
                    throw new Error('Forbidden3')
                }
            } else if (permissionOfAPage && permissionOfAPage.length > 1) {
                let arrOfPermission = permissionOfAPage.split("")
                arrOfPermission.forEach((el) => {
                    if (el === 'D') {
                        return next()
                    }
                })
            }

            throw new Error('Forbidden4')
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = Authorization;