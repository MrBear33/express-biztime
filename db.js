/** Database setup for BizTime. */


const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://mrbear:BabyDragon@localhost/biztime"
});

client.connect();


module.exports = client;