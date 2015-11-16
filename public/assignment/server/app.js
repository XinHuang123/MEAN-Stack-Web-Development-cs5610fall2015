module.exports = function(app) {
    require("./services/form.service.js")(app);
    require("./services/user.service.js")(app);
};