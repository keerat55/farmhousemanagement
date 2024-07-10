// pages/api/login.js

export default function handler(req, res) {
  const { email, password } = req.body;

  // Add your authentication logic here
  // For example, you can check the credentials against your database

  if (email === 'user@example.com' && password === 'password') {
      res.status(200).json({ message: 'Login successful' });
  } else {
      res.status(401).json({ message: 'Invalid credentials' });
  }
}
