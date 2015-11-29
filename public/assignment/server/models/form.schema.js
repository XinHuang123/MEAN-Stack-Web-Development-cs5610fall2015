module.exports = function(mongoose) {
    var FormSchema = mongoose.Schema({
            "title": String,
            "userId" : Number
        }, {collection: "cs5610.assignment.form"});

        return FormSchema;
};