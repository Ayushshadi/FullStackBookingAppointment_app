const path = require('path');
const User = require('../models/user');




exports.getBookingPage = (req, res, next)=>{
    res.sendFile(path.join(__dirname, "../",  "views", "index.html"));
};



exports.getUsers = (req, res, next)=>{
      User.findAll()
      .then((users)=>{
        res.json(users);
      })
      .catch(err=>console.log(err));
};


exports.addUser = (req, res, next)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPhone = req.body.phone_no;
    console.log(req.body);

    User.create({
        name : userName,
        email : userEmail,
        phone_no : userPhone,
    })
    .then(result =>{
         console.log("Addeds!");
         res.redirect("/get");
    })
    .catch(err=>console.log(err));
}


exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    User.findByPk(id)
      .then((user) => {
        return user.destroy();
      })
      .then((result) => {
        console.log("User Deleted");
        res.redirect("/get");
      })
      .catch((err) => {
        console.log(err);
      });
  };