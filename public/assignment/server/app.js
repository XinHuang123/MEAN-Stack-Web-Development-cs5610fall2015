module.exports = function(app) {
    require("./services/form.service.js")(app);
    require("./services/user.service.js")(app);
    require("./services/field.service.js")(app);

    require("./models/user.model.js")(app);
    require("./models/form.model.js")(app);
};