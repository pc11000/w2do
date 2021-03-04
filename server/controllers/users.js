const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {OAuth2Client} = require('google-auth-library');

// const GOOGLE_CLIENT_ID = '225386456335-jo1ruh8kq8dptm1legboe5rfkpe8p49b.apps.googleusercontent.com';
const GOOGLE_CLIENT_ID = '91474893082-ur8tpsu71b3lvbgua7c6lk3fim4orsh2.apps.googleusercontent.com';
//const GOOGLE_CLIENT_SECRET = 'odh3c5v6DwKskeEGZkzYuZ0j';
const GOOGLE_CLIENT_SECRET = '-498YMcaNfJRjNB2Gz8Sm66e';
const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, 'https://todoapi.tnx-solutions.ch/users/google-auth');
// const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, 'http://localhost:3000/users/google-auth');

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
      console.log(err)
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

exports.googleAuth = async (req, res, next) => {
  try {

    /*const authorizeUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    });
    console.log(authorizeUrl)*/

    const r = await client.getToken(req.query.code)
    client.setCredentials(r.tokens);

    const ticket = await client.verifyIdToken({idToken: r.tokens.id_token, audience: GOOGLE_CLIENT_ID});
    const payload = ticket.getPayload();
    const userDetails = {email: payload['email'], firstname: payload['given_name'], lastname: payload['family_name']};
    let user = await User.findOne({ email: userDetails.email, provider: 'google' })
    if(user == null) {

      user = new User({
        name: userDetails.firstname,
        email: userDetails.email,
        password: '123456',
        provider: 'google'
      });
      user = await user.save()
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_KEY ,
      { expiresIn: '1h'}
    );
    const response = {
      name: user.name,
      message: 'user logged in',
      userId: user._id,
      token: token,
      expiresIn: 3600, // in seconds = 1 hr,
      email: user.email,
      _id: user._id,
      language: user.language
    }
    let queryList = [];
    for (let key in response)
      if (response.hasOwnProperty(key)) {
        queryList.push(encodeURIComponent(key) + "=" + encodeURIComponent(response[key]));
      }
    const queryParams = queryList.join("&");
    return res.redirect(`https://todo.tnx-solutions.ch/social-login?${queryParams}`)
    // return res.redirect(`http://localhost:4200/social-login?${queryParams}`)
  }
  catch (exception) {
    return res.status(400).json({message: exception.toString()});
  }

}
