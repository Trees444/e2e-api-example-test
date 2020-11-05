const config = require('../../resources/config');

module.exports = {
    async createNewUser(agent, userData) {
        return await agent
            .post(`${config.apiURL}/api/users`)
            .send(userData)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('createNewUser error');
            })
    },

    async updateUser(agent, userData, id) {
        return await agent
            .put(`${config.apiURL}/api/users/${id}`)
            .send(userData)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('updateUser error');
            })
    },

    async getUser(agent, id) {
        return await agent
            .get(`${config.apiURL}/api/users/${id}`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUser error with id: ' + id);
            })
    },

    async getUsers(agent, page) {
        return await agent
            .get(`${config.apiURL}/api/users?page=${page}`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('getUsers error');
            })
    },
};
