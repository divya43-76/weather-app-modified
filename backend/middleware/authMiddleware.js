import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // This includes user id and role
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Invalid token' });
  }
};

// Optional: Use for role-based access control
export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: 'Access forbidden: Insufficient permissions' });
    }
    next();
  };
};
