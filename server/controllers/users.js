const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.createUser = (req, res, next) => {
  if(!req.body.name || !req.body.email || !req.body.password){
    res.status(400).json({
      message: 'Bad request, required properties missing!'
    });
    return;
  }
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(result => {
      res.status(201).json({
        message: 'User created!',
        user: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Invalid Authentication Credentials!'
      });
    });
  });
}

exports.updateUser = async (req, res, next) => {
  try {
    const userFilter = { _id: req.body._id };
    if (!userFilter["_id"]) {
      return res.status(400).send({ status: 400, message: "bad request" });
    }
    const updateData = {
      name: req.body.name,
      email: req.body.email,
      language: req.body.language
    };

    if(req.body.password) {
      updateData.password = await bcrypt.hash(req.body.password, 10); 
    }
  
    const updateUser = await User.findOneAndUpdate(userFilter, updateData).lean();
      res.status(200).json({ message: 'User updated successfully!'});
  } catch (err) {
    console.log(err);
      res.status(500).json({ message: 'Error updating user!'});
 }
}

exports.userLogin = (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
  .then(user => {
    if(!user) {
      return res.status(401).json({
        message: 'authentication failed'
      });
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
    if(!result) {
      return res.status(401).json({
        message: 'authentication failed!'
      });
    }
    const token = jwt.sign(
      { email: fetchedUser.email, userId: fetchedUser._id },
      process.env.JWT_KEY ,
      { expiresIn: '1h'}
    );
    const response = {
      name: fetchedUser.name,
      message: 'user logged in',
      userId: fetchedUser._id,
      token: token,
      expiresIn: 3600, // in seconds = 1 hr,
      userMeta: { email: fetchedUser.email, _id: fetchedUser._id , name: fetchedUser.name, language: fetchedUser.language}
    }
    // console.log(response);
    res.status(200).json(response);
  })
  .catch(err => {
    res.status(401).json({
      message: 'Invalid Authentication Credentials!'
    });
  });
}
