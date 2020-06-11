const fs = require("fs");
var data = fs.readFileSync('main/uitility/addressbook.json')
var json = JSON.parse(data);

module.exports = {

    createAddressBookRecord(userDetail, callback) {
        json.push(userDetail)
        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                return callback(err, null)
            }
            return callback(null, { message: "successfully done" })
        }))
    },

    updateUserDetails(userDetail, callback) {
        var isExist = false;
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === userDetail.phoneNumber) {
                json[i].firstName = userDetail.firstName;
                json[i].lastName = userDetail.lastName;
                json[i].address = userDetail.address;
                json[i].city = userDetail.city;
                json[i].state = userDetail.state;
                json[i].zip = userDetail.zip
                break;
            }
            if (json[i].phoneNumber !== userDetail.phoneNumber) {
                isExist = true;
                break
            }
        }
        if (isExist) {
            return callback(null, { message: 'user is not exist' })
        }
        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                return callback(err, null)
            }
            return callback(null, { meassage: "sucessfully updated user detail" })
        }))

    },

    deleteUser(req, callback) {
        var isExist = false;
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === req.params.phoneNumber) {
                json.splice(i, 1);
                break;
            }
            if (json[i].phoneNumber !== req.params.phoneNumber) {
                isExist = true;
                break
            }
        }
        if (isExist) {
            return callback(null, { message: 'user is not exist' })
        }
        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                return callback(err, null)
            }
            return callback(null, { meassage: "sucessfully deleted user detail" })
        }))
    },

    searchUser(req, callback) {
        var jsonData;
        var isExist = false;
        for (var i = 0; i < json.length; i++) {

            if (json[i].phoneNumber === req.query.phoneNumber || json[i].zip === req.query.zip || json[i].state === req.query.state) {
                jsonData = json[i];
                break;
            }
            if (json[i].phoneNumber !== req.query.phoneNumber || json[i].zip !== req.query.zip || json[i].state !== req.query.state) {
                isExist = true;
                break;
            }
        }

        if (isExist) {
            return callback(null, { message: 'user is not exist' })
        }
        return callback(null, jsonData)
    }

}


