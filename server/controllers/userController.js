const { createUser } = require("../models/userModel");

const handleSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    await createUser(username, email, password);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { handleSignUp };
