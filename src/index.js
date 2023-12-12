const createApp = require('./app');



( async () => {
  const port = process.env.PORT || 4000;
  const app = await createApp();
  app.listen(port, () => {
    console.log(`Mi port ${port}`);
  });
})()