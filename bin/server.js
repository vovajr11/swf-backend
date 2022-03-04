const app = require('../app');

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server started on PORT: 8080`),
);
