import knex from "../db/db.js";

const AuthObj = {
  "owner": {
    "read" : true,
    "write" : true,
    "userManage" : true,
    "sheetManage" : true
  },
  "viewer": {
    "read" : true,
    "write" : false,
    "userManage" : false,
    "sheetManage" : false
  },
  "editor" : {
    "read" : true,
    "write" : true,
    "userManage" : false,
    "sheetManage" : false
  }
}

const requestCurrentUser = async (id) => {
  let returnData = await knex("users")
    .select("*")
    .where({ firebase_uuid: id })
    .then((data) => data);
     return returnData
  }
  const checkAuthLevel = async (action, sheet, req) => {
    const currentUser = await requestCurrentUser(req.user.user_id)
    return knex('user_roles')
      .select('*')
      .where({user_id: currentUser[0].id, sheet_id: sheet})
      .then(data => {
        if (data.length !== 0) {
          const userRole = data[0].role_name.toLowerCase()
          if (AuthObj[userRole][action]) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
  }

  /*
      ==Our checker for Authlevel==
  if (!await checkAuthLevel('read', {TARGET}, req)) {
    res.status(401).send("Unauthorized");
    return;
  }
  */


export {requestCurrentUser, checkAuthLevel}