// const addressBook = require('../uitility/addressbook.json')
const fs = require("fs");

module.exports = {
    createAddressBookRecord(userDetail, callback) {
        var data = fs.readFileSync('main/uitility/addressbook.json')
        var json = JSON.parse(data);
        console.log("data before push---->", json);

        json.push(userDetail)
        console.log("data after push---->", json);

        fs.writeFile('main/uitility/addressbook.json', JSON.stringify(json, null, 4), ((err, data) => {
            if (err) {
                console.log("erro---->", err)
                return callback(err, null)
            }
            return callback(null, { message: "successfully done" })
        }))
    }
}

