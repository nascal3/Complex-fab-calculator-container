const express = require('express');
const sequelize = require('./databaseConnection');

const app = express();
require('./routes')(app);

(async() => {
  try {
    await sequelize.sync();

    const port = 5000;
    app.listen( port, console.log(`listening to port ${port}`));
  } catch (err) {
    console.error('Error occurred: ',err.name, '<===> Message: ',err.message);
  }

})();



