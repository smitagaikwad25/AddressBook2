// const addressBook = require('../uitility/addressbook.json')
const fs = require("fs");

module.exports = {
    createAddressBookRecord(userDetail, callback) {

        console.log("userDetail at service ---->", typeof userDetail);
        // addressBook.push(userDetail)

        // console.log("while pushing data into file--->", addressBook);

        // const finalData = JSON.stringify(addressBook)

        // console.log("data after push--->", finalData);
        // console.log("singifdata--->",JSON.stringify(userDetail));
        //  const finalData = JSON.stringify(userDetail)
        //  console.log("singifdata--->",JSON.parse(finalData));

        fs.writeFileSync('main/uitility/addressbook.json', userDetail, ((err, data) => {
            if (err) {
                console.log("erro---->", err);

                return callback(err, null)
            }
            console.log("data--->", data);


            return callback(null, data)

        }))
    }
}

