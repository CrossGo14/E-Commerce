import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  let token;

  //IDK WHAT HAPPEND BUT THIS WORKED
  // Try to get token from 'token' header OR 'Authorization' header
  if (req.headers.token) {
    token = req.headers.token;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1]; // Get token after "Bearer "
  }

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized, Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Assuming your token payload is { id: user._id }
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.error("JWT error:", error.message);
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
