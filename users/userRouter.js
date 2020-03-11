const express = require('express');

const Users = require("../users/user-reouter.js");

const router = express.Router();

router.post('/', (req, res) => {
  Users.add(req.body)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(err => {
    console.log('Post', err);
    res.status(500).json({
      message: "error adding the user",
    });
  });
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  Users.find(req.query)
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    console.log("Users get", err);
    res.status(500).json({
      message: "Error retrieving users",
    });
  });
  // do your magic!
});

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
  .then(users => {
    if(user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found"});
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: "Error retrieving the user",
    });
  });
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
  .then(count => {
    if(count > 0) {
      res.status(200).json({ message: "The user has been removed"});
    } else {
      res.status(404).json({ message: 'The user could not be found'});
    }
  })
  .catch(err => {
    res.status(500).json({
      message: "Error removing the user",
    });
  });
  // do your magic!
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Users.update(req.params.id, changes)
  .then(user => {
    if(user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "The user could not be found"});
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: "Error updating the user",
    });
  });
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
