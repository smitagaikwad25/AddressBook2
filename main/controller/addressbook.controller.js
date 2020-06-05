const addressBookService = require('../service/addressbook.service');

module.exports = {
    createAddressBookRecord(req, res) {

        console.log("req at controller --->", req.body);

        try {
            var response = {};

            req.checkBody('firstName').exists();
            req.checkBody('lastName').exists();
            req.checkBody('address').exists();
            req.checkBody('city').exists();
            req.checkBody('state').exists();
            req.checkBody('zip').exists();
            req.checkBody('phoneNumber').exists();


            const error = req.validationErrors();

            if (error) {
                response.success = false;
                response.message = 'enter valid details';
                response.error = error;
                return res.status(500).send(response);
            } else {
                var userDetails = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip,
                    phoneNumber: req.body.phoneNumber
                }
                addressBookService.createAddressBookRecord(userDetails, (err, data) => {


                    if (err) {
                        response.success = false;
                        response.message = 'erro occurr while adding record in to address book';
                        response.err = err;
                        return res.status(500).send(response);
                    } else {
                        response.data = data
                        response.success = true;
                        response.message = 'successfully added record in the address book';
                        return res.status(200).send(response);
                    }
                });

            }
        } catch (err) {
            res.status(500).send({ message: "erro occure" })
        }
    },

    updateUserDetails(req, res) {
        try {
            const response = {};
            addressBookService.updateUserDetails(req, (err, data) => {
                if (err) {
                    response.success = false;
                    response.message = 'erro occurre while updating';
                    response.err = err;
                    return res.status(500).send(response);
                } else {
                    response.data = data
                    response.success = true;
                    response.message = 'user information update successfully done'
                    return res.status(200).send(response)
                }
            })

        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Internal erro occure" });
        }
    }
}