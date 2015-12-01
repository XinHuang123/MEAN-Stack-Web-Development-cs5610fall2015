module.exports = function(mongoose) {
    var UserSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "username" : String,
            "password" : String,
            "email"    : String,
        }, {collection: "cs5610.project.user"});

        return UserSchema;
};