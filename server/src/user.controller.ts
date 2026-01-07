import express from 'express';
const router = express.Router();
import User from './user.model.js';

// Create a new user (Create)
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users (Read)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.set('Content-Range', `users 0-9/100`); // Required for pagination

    //res.set('Content-Range', `users 0-${users.length}/${users.length}`); // Required for pagination
   res.setHeader('Access-Control-Expose-Headers', 'Content-Range');   
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user by ID (Update)
router.put('/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedUser);
});


// Delete a user by ID (Delete)
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});


export default router;
