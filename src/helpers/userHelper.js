module.exports = {
    async createNewUser(agent, userData) {
        return await agent
            .post('https://reqres.in/api/users')
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
            .put(`https://reqres.in/api/users/${id}`)
            .send(userData)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log('updateUser error');
            })
    },
};
