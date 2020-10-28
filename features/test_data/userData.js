const userData = {
    name: "morpheus",
    job: "leader"
};

module.exports = {
    getUser: function (params = {}) {
        return {
            ...userData,
            ...params
        };
    },
};
