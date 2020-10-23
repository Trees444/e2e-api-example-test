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
};
