module.exports = () => (req, res, next) => {
  const { user } = req.session;

  if (typeof user === 'undefined') {
    return next();
  }

  return res.redirect('back');
};
