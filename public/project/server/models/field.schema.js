module.exports = function(mongoose) {
    var FieldSchema = mongoose.Schema({
            "label": String,
            "fieldType" : {
                  type: String,
                  enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
              },
            "options" : [{
                   "label" : {type: String},
                   "value" : {type: String}
                   }],
            "placeholder" : {type: String, default: "Text"}
        });

        return FieldSchema;
};