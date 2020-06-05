// const addressBook = require('main/uitility/addressbook.json')
const fs = require("fs");

module.exports = {
    createAddressBookRecord(userDetail, callback) {
        var data = fs.readFileSync('main/uitility/addressbook.json')
        var json = JSON.parse(data);
        console.log("data befor push--->", json);
        json.push(userDetail)
        console.log("data after push--->", json);
        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                console.log("erro---->", err)
                return callback(err, null)
            }
            return callback(null, { message: "successfully done" })
        }))
    },

    updateUserDetails(req, callback) {
        var data = fs.readFileSync('main/uitility/addressbook.json')
        var json = JSON.parse(data);
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
        }
        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                return callback(err, null)
            }
            return callback(null, { meassage: "sucessfully updated user detail" })
        }))
    }

}


