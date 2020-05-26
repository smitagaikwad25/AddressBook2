var chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
chai.should();
const fs = require('fs');
chai.use(chaiHttp);

var addressbookData = fs.readFileSync('main/uitility/addressbook.js')

describe('Test Cases for first api type', () => {

    it('given details should return status code 200', (done) => {
        chai.request(server)
            .post('/createrecord')
            .send({firstName:"smita",
                lastName:"shinde",
                address:"thane",
                city:"thane",
                state:"maharastra",
                zip:606060,
                phoneNumber:0987654321
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });


})