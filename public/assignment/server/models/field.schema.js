module.exports = function(mongoose) {
    var FieldSchema = mongoose.Schema({
            "label": String,
            "fieldType" : {
                  type: String,
                  enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
              },
              "options" :[{
                 "fieldType" : {
                       type: String,
                       enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
                   },
                 "TEXT": {
                     "placeholder" : {type: String, default: "Text"}
                 },
                 "TEXTAREA" : {
                     "placeholder" : {type: String, default: "Text"}
                 },
                 "RADIO" : {
                     "label" : {type: String},
                      "value" : {type: String}
                 },
                 "CHECKBOX" : {
                      "label" : {type: String},
                       "value" : {type: String}
                 },
                 "CHECKBOX" : {
                       "label" : {type: String},
                        "value" : {type: String}
                  }
             }]
        });

        return FieldSchema;
};