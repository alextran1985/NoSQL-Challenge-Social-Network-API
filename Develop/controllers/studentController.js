// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const Users = await User.find().populate("thought");
      res.json(Users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const User = await User.findOne({
        _id: req.params.UserId,
      }).populate("thought");

      if (!User) {
        return res.status(404).json({ message: "No User with that ID" });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const User = await User.create(req.body);
      res.json(User);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUser(req, res) {
    try {
      const User = await User.findOneAndDelete({
        _id: req.params.UserId,
      });

      if (!User) {
        return res.status(404).json({ message: "No User with that ID" });
      }

      await User.deleteMany({ _id: { $in: User.t } });
      res.json({ message: "User and t deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUser(req, res) {
    try {
      const User = await User.findOneAndUpdate(
        { _id: req.params.UserId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!User) {
        return res.status(404).json({ message: "No User with this id!" });
      }

      res.json(course);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
