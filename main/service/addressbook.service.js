const fs = require("fs");
var data = fs.readFileSync('main/uitility/addressbook.json')
var json = JSON.parse(data);

module.exports = {
    isUserPresent(userDetail, callback) {
        let isExist = false;
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === userDetail.phoneNumber) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            return callback(null, { message: 'user already exist' })
        }
        return callback({ meassage: 'user is not exist' })
    },

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
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === userDetail.phoneNumber) {
                json[i].firstName = userDetail.firstName;
                json[i].lastName = userDetail.lastName;
                json[i].address = userDetail.address;
                json[i].city = userDetail.city;
                json[i].state = userDetail.stateCode;
                json[i].zip = userDetail.zip
                break;
            }
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
        let isExist = false;
        for (var i = 0; i < json.length; i++) {
            if (json[i].phoneNumber === req.query.phoneNumber ||
                json[i].zip === req.query.zip || json[i].stateCode === req.query.stateCode) {
                jsonData = json[i];
                isExist = true;
                break;
            }
        }
        if (isExist) {
            return callback(null, jsonData)
        }
        return callback(null, { meassage: "user is not exist" })

    },

    searchFileIfNotPresentCreateNew(filePath, callback) {
        console.log("at service");
        var filePath = req.params.dynamicRoute
        var isExist = false
        fs.access(filePath, function (err) {
            if (err == null) {
                console.log("file exist");
                isExist = true
            } else if (err.code === 'ENOENT') {
                console.log("file not found");
                fs.touch('/home/admin1/addressBook/main/uitility/book.json');
            }
        })
        if (isExist) {
            return callback(null, { message: 'file  already exist' })
        }
        return callback(null, { message: 'file does not exit created new one' })

    }

}


