module.exports = (app) => {
    const addressBookController = require('../controller/addressbook.controller');

    app.post('/create/record', addressBookController.createAddressBookRecord)
    app.put('/update/user/:phoneNumber', addressBookController.updateUserDetails)
    app.delete('/delete/user/:phoneNumber',addressBookController.deleteUser)

}