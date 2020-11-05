const { Given, When, Then } = require('@cucumber/cucumber');

const userHelper = require('../helpers/userHelper');
const agent = require('../helpers/superagentHelper');
const userData = require('../test_data/userData');
const expect = require('chai').expect;

const user = userData.getUser();
const updateUser = userData.getUser({ name: "morpheus updated"});
var userId;

When('user create', async function () {
    this.res = await userHelper.createNewUser(agent, user);
    userId = this.res.body.id;
});

Then('check that user was created', function () {
    expect(this.res.status).to.equal(201);
    expect(this.res.body.name).to.equal(user.name);
});

When('user updated', async function () {
    this.res = await userHelper.updateUser(agent, updateUser, userId);
});

Then('check that user was updated', function () {
    expect(this.res.statusCode).to.equal(200);
    expect(this.res.body.name).to.equal(updateUser.name);
});

When('get list of users', async function () {
    this.res = await userHelper.getUsers(agent, 2);
});

Then('check list of users', function () {
    expect(this.res.statusCode).to.equal(200);
    expect(this.res.body.per_page).to.equal(6);
    expect(this.res.body.total).to.equal(12);
    expect(this.res.body.data[0].first_name).to.equal("Michael");
});

When('get single user', async function () {
    this.res = await userHelper.getUser(agent, userId);
});

Then('check user information', function () {
    expect(this.res.statusCode).to.equal(200);
    expect(this.res.body.data.first_name).to.equal(user.name);
    expect(this.res.body.data.id).to.equal(userId);
});
