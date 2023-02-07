module.exports = {
    index:  function(req, res, next) {
        res.render('index', {
            title: "C19 la mejor"
        });
      }
}