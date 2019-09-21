Contact = require('./mahasiswaModel');

exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json ({
      status: "Success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};

exports.new = function (req, res) {
  var contact = new Contact()
  contact.nim = req.body.nim ? req.body.nim : contact.nim;
  contact.nama = req.body.nama;
  contact.jurusan = req.body.jurusan;
  contact.semester = req.body.semester;

  contact.save(function (err) {
    res.json({
      message: 'New Contact created!',
      data: contact
    });
  });
};

exports.view = function(req, res){
  Contact.findById(req.params.contact_id, function(err, contact)
  {
    if(err)
      res.send(err);
      res.json({
        message:'Contact details loading..',
        data: contact
      });
  });
};

// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
       if (err)
           res.send(err);
           contact.nim = req.body.nim ? req.body.nim : contact.nim;
           contact.nama = req.body.nama;
           contact.jurusan = req.body.jurusan;
           contact.semester = req.body.semester;
// save the contact and check for errors
       contact.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'Contact Info updated',
               data: contact
           });
       });
   });
};
// Handle delete contact
exports.delete = function (req, res) {
   Contact.remove({
       _id: req.params.contact_id
   }, function (err, contact) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Contact deleted'
       });
   });
};
