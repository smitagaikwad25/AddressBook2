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

    updateUserDetails(req, callback) {
        var isExist = false;
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === req.params.phoneNumber) {
                json[i].firstName = req.body.firstName;
                json[i].lastName = req.body.lastName;
                json[i].address = req.body.address;
                json[i].city = req.body.city;
                json[i].state = req.body.state;
                json[i].zip = req.body.zip
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
}


