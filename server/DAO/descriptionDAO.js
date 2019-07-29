let dbConfig = require("../Utilities/mysqlConfig");



let getDescription = (criteria, callback) => {
    //criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from skills_description where 1`,criteria, callback);
}

let createRecord = (dataToSet, callback) => {
    console.log("insert into record (period, id, rating, comment) VALUES ?", [dataToSet], 'whoops');
    dbConfig.getDB().query(`insert into record (period, id, rating, comment) VALUES ?`, [dataToSet], callback);
}

let getRecordDetail = (criteria, callback) => {
	let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from record where 1 ${conditions}`, callback);
}

let getRecordDetailByPeriod = (criteria, callback) => {
	let conditions = "";
    criteria.period ? conditions += ` and period = '${criteria.period}'` : true;
    dbConfig.getDB().query(`select * from record where 1 ${conditions}`, callback);
}


let deleteRecord = (criteria, callback) => {
    let conditions = "";
   criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
   console.log(`delete from record where 1 ${conditions}`);
   dbConfig.getDB().query(`delete from record where 1 ${conditions}`, callback);

}

let updateRecord = (criteria,dataToSet,callback) => {
	let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.rating ? setData += `rating = '${dataToSet.rating}'` : true;
    dataToSet.period ? setData += `, period = '${dataToSet.period}'` : true;
    console.log(`UPDATE record SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE record SET ${setData} where 1 ${conditions}`, callback);
}

module.exports = {
    getDescription : getDescription,
    createRecord : createRecord,

    deleteRecord : deleteRecord,
    updateRecord : updateRecord,
    getRecordDetail : getRecordDetail,
    getRecordDetailByPeriod : getRecordDetailByPeriod
}
