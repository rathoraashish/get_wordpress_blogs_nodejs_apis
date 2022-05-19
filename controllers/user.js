const con = require('../db/dbconfig')

// -----------------Insert new user to table--------------

exports.addUser = async (req) => {
    const userData = req.body;
    console.log("saveUser controller::)", userData)
    const query = `insert into users(name,email,technology) values('${userData.name}','${userData.email}','${userData.technology}')`;
    const data = await con.query(query).then(obj => {
        console.log("1 record inserted", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    // console.log("datataaaa", data);
    return data
}


// -----------------Insert new user to table--------------
exports.updateUser = async (req) => {
    const userData = req.body;
    console.log("updateUser controller::)", userData)
    const id = userData.id;
    const [userinfo] = await con.query(`select * from users where id=${id}`);
    let prev_name = userinfo[0].name;
    let prev_email = userinfo[0].email;
    let prev_technology = userinfo[0].technology;
    console.log({"old name":prev_name,"old email":prev_email,"old tech":prev_technology});
    
    let user_name   = (userData.name != null || userData.name != undefined) ? userData.name : prev_name; 
    let user_email  = (userData.email != null || userData.email != undefined) ? userData.email : prev_email; 
    let user_tech   = (userData.technology != null || userData.technology != undefined) ? userData.technology : prev_technology; 
    
    console.log({"new name":user_name,"new email":user_email,"new tech":user_tech});
    // console.log(userinfo[0].id)
    const query = `update users set name='${user_name}',email='${user_email}',technology='${user_tech}' where id=${id}`;
    const data = await con.query(query).then(obj => {
        console.log("1 record updated", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    console.log("datataaaa", data);
    return data;
}

//------------Delete an exisiting user-------------

exports.deleteUser = async (req) => {
    const userData = req.body;
    console.log("deleteUser controller::)", userData)
    const query = `delete from users where id=${userData.id}`;
    const data = await con.query(query).then(obj => {
        console.log("1 record deleted", obj[0]);
        return obj[0]
    }).catch(err => {
        console.log("error", err);
        return err
    })
    // console.log("datataaaa", data);
    return data
}