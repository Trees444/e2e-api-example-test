const { Given, When, Then } = require('@cucumber/cucumber');

const userHelper = require('../helpers/userHelper');
const agent = require('../helpers/superagentHelper');
const userData = require('../test_data/userData');
const expect = require('chai').expect;

const user = userData.getUser();
const updateUser = userData.getUser({ name: "morpheus updated"});
let userId, res;

When('user create', function () {
    res = userHelper.createNewUser(agent, user);
    userId = res.body.id;
});

// Then('check that user was created', function (expectedAnswer) {
//     expect(res.statusCode).to.equal(201);
//     expect(res.body.name).to.equal(user.name);
// });
