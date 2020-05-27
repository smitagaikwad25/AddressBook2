// const addressBook = require('../uitility/addressbook.json')
const fs = require("fs");

module.exports = {
    createAddressBookRecord(userDetail, callback) {

        console.log("userDetail at service ---->", typeof userDetail);

        const finalData = JSON.stringify(userDetail)

        fs.writeFileSync('main/uitility/addressbook.json', finalData, ((err, data) => {
            if (err) {
                console.log("erro---->", err)
                return callback(err, null)
            }

            return callback({ message: "successfully done" })
        }))
     }
}

