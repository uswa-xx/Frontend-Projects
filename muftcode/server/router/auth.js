const jwt= require ('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const bcrypt = require('bcryptjs');
require('../db/conn');


router.get('/', async (req, res) => {
  res.send('Hello from router!');
});

//using promises
// router.post('/register', (req, res) => {
//   const { firstname, lastname, email, phone, password, confirmpassword } = req.body;

//   if (!firstname || !lastname || !email || !phone || !password || !confirmpassword) {
//     return res.status(422).json({ error: "Fill all fields properly!" });
//   }

//   User.findOne({ email: email })
//     .then(userExist => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already exists!" });
//       }

//       const user = new User({ firstname, lastname, email, phone, password, confirmpassword });

//       user.save()
//         .then(() => {
//           res.status(201).json({ message: "User registered successfully" });
//         })
//         .catch(err => {
//           console.error(err);
//           res.status(500).json({ error: "Failed to register" });
//         });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: "An error occurred. Please try again later." });
//     });
// });

router.post('/register', async (req, res) => {
  
  const { firstname, lastname, email, phone, password, confirmpassword } = req.body;

  if (!firstname || !lastname || !email || !phone || !password || !confirmpassword) {
    return res.status(422).json({ error: "Fill all fields properly!" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists!" });
    }else if(password != confirmpassword){
      return res.status(422).json({ error: "Passwords dont match!" });
    } else {
      const user = new User({ firstname, lastname, email, phone, password, confirmpassword });
    
      await user.save();
      
      return res.status(201).json({ message: "User registered successfully" });
    
    }

    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }

});


router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill in all the data!" });
        }

        const userSignIn = await User.findOne({ email: email });

        if (userSignIn) {
            const isMatch = await bcrypt.compare(password, userSignIn.password);

            if (!isMatch) {
              const token = await userSignIn.generateAuthToken(); // Generate the token here
                //console.log(token);
                userSignIn.tokens.push({ token: token }); // Add the token to the tokens array
                console.log(userSignIn.tokens);
                try {
                  await userSignIn.save();
                  console.log('Token saved successfully');
                } catch (error) {
                  console.error('Error saving token:', error);
                }
                
                //await userSignIn.save(); // Save the updated user document with the new token

                res.json({ message: "User SignIn Successful!", token: token }); // Send the token in the response
                //res.status(400).json({ error: "Invalid Credentials" });
            // } else {
            //     const token = await userSignIn.generateAuthToken(); // Generate the token here
            //     console.log(token);
            //     userSignIn.tokens.push({ token: token }); // Add the token to the tokens array
            //     await userSignIn.save(); // Save the updated user document with the new token
            //     res.json({ message: "User SignIn Successful!", token: token }); // Send the token in the response
             }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "An error occurred. Please try again later." });
    }
});



   
    
  



module.exports = router;
