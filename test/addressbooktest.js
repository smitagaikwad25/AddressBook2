var chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
chai.should();
const fs = require('fs');
chai.use(chaiHttp);

var addressbookData = fs.readFileSync('main/uitility/addressbook.js')

describe('Test Cases for first api type', () => {

    it('given  user details is in proper form should return status code 200', (done) => {
        chai.request(server)
            .post('/createrecord')
            .send({
                firstName: "smita",
                lastName: "shinde",
                address: "thane",
                city: "thane",
                state: "maharastra",
                zip: 606060,
                phoneNumber: 0987654321
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('given http method when wrong return status code 404', (done) => {
        chai.request(server)
            .put('/createrecord')
            .send({
                firstName: "smita",
                lastName: "shinde",
                address: "thane",
                city: "thane",
                state: "maharastra",
                zip: 606060,
                phoneNumber: 0987654321
            })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('given http path when wrong return status code 404', (done) => {
        chai.request(server)
            .post('/creadte')
            .send({
                firstName: "smita",
                lastName: "shinde",
                address: "thane",
                city: "thane",
                state: "maharastra",
                zip: 606060,
                phoneNumber: 0987654321
            })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });

    it('given pran when wrong return status code 500', (done) => {
        chai.request(server)
            .post('/createrecord')
            .send({
                firstname: "smita",
                lastName: "shinde",
                address: "thane",
                city: "thane",
                state: "maharastra",
                zip: 606060,
                phoneNumber: 0987654321
            })
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });

    it('given user detail when with missing pram return status code 500', (done) => {
        chai.request(server)
            .post('/createrecord')
            .send({
                lastName: "shinde",
                address: "thane",
                city: "thane",
                state: "maharastra",
                zip: 606060,
                phoneNumber: 0987654321
            })
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });

});

describe('Test Cases for first api type', () => {


    it('given file name when correct should return status code 200', (done) => {
        chai.request(server)
            .post('/createrecord')
            .send({
               
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });





})