module.exports = function(mongoose) {
    var UserSchema = mongoose.Schema({
            "firstName": String,
            "lastName" : String,
            "username" : String,
            "password" : String
        }, {collection: "cs5610.assignment.user"});

        return UserSchema;
};