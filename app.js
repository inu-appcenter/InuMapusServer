const app = require('./config/express')();

app.use('/category',require('./routes/category/index'));
app.use('/icon',require('./routes/icon/index'));
app.use('/searchBar',require('./routes/searchBar/index'));


// error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

  // render the error page
  app.use((err, req, res, next) => {
    console.log(err)
    res.sendStatus(err.status || 500);
});

  const port = app.get('key').port;
  app.listen(port, () => {
    console.log( 'Listening on port %d.', port);

});

module.exports = app;
