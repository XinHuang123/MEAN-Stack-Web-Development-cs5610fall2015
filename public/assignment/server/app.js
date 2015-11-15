"use strict";

module.exports=function(app){
    var formModel=require("./models/form.model.js")(app);
    var userModel=require("./models/user.model.js")(app);

    require("./services/field.service.js")(app, formModel);
    require("./services/form.service.js")(app, formModel);
    require("./services/user.service.js")(app, userModel);

}
