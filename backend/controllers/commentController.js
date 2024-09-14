const Comment = require('../models/Comment');
const Session = require('../models/Session');

// Create a comment
exports.createComment = async (req, res) => {
  const { content, sessionId } = req.body;
  try {
    const comment = new Comment({
      content,
      user: req.user._id,
      session: sessionId,
    });
    await comment.save();

    // Add comment to session
    const session = await Session.findById(sessionId);
    session.comments.push(comment._id);
    await session.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
