module.exports = (app) => {
    const addressBookController = require('../controller/addressbook.controller');
    app.post('/createrecord', addressBookController.createAddressBookRecord)
    
}