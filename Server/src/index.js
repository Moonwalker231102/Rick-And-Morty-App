const {sequelize} = require('./DB_connection');
const saveApiData = require('./controllers/saveApiData');
const server = require("./server")
const PORT = 3001;

sequelize.sync({force: true}).then(async () =>{
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);
    });
});