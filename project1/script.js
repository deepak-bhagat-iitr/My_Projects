app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Hash the password before checking for 
  
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.json({ message: "Email already exists" });
      }
  
      const data = { email:email, password:password };
      await collection.insertMany([data]);
      res.json({ message: "Signup successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
