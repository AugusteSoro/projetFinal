
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);


module.exports = {
	db: {
		host: 'localhost',
		user: 'root',
		password: '',
		name: 'trackers',}
	// },
  // jwt: {
  //   secret: 'JaYEQ+MhAQaRRk4MMjAxOC0xMS0yOCAxMjoyMjoxMjE1NDM0MDc3MzIuMjI2Mw=='
  // },
  // session: () => {
  //   const hour = 3600000;
  //   const expires = new Date(Date.now() + hour);
  //   const maxAge = hour;

  //   return session({
  //     secret: 'JaYEQ+MhAQaRRk4MMjAxOC0xMS0yOCAxMjoyMjoxMjE1NDM0MDc3MzIuMjI2Mw==',
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { secure: false, expires, maxAge },
  //     store: new FileStore({
  //       path: __dirname + "/../sessions"
  //     })
  //   })
  // }
};
