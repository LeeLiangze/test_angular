let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
    mysqlConfig.getDB().query("create table IF NOT EXISTS record (period VARCHAR(6), id VARCHAR(5), rating INT(1), comment VARCHAR(100))");

}

module.exports = {
    initialize: initialize
}
