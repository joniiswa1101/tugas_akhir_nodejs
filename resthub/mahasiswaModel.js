var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: {
    type: String,
    required: true
  },
  semester:  {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
  Contact.find(callback).limit(limit);
}
