'use strict';
//ADD & BOOTSWATCH theme interpolation with [BOOTSTRAP & JADE]

//Declare Port params
const PORT = process.env.PORT || 3000;
//Declare Global Vars
let jade = require('jade');
let http = require('http');
let qs = require('qs');
let nodeStatic = require('node-static');
let file = new nodeStatic.Server('./public');

//Declare SERVER
http.createServer((req, res) => {
  console.log('REQUEST.url-->', req.url);
  console.log('RESPONSE.url-->', res.url);
  let html;
  let qsParts = req.url.split('?');
  let path = qsParts[0];
  let query = qs.parse(qsParts[1]);

  switch(path) {
    case '/':{
      html = jade.renderFile('./views/splash.jade', {
        theme: validateTheme(query.theme)
      });
      res.end(html);
      break;
    }
    case '/msgpage':{
      html = jade.renderFile('./views/msgpage.jade',{
        theme: validateTheme(query.theme)
        // image: ,
        // time: ,
        // text:
      });
      res.end(html);
    } break;
  }

  file.serve(req, res);  // node static plugin TYPE
})
.listen(PORT, err => {
  if(err) return console.log(err);
  console.log(`Node server listening on port ${PORT}`);
});

function validateTheme(checkTheme) {
  checkTheme = checkTheme               //
    ? theme.toLowerCase()               // if checkTheme is active, then RETURN it as LowerCase()
    : '';                               // and return to
  let themes = ['cerulean','cosmo', 'cyborg','flatly', 'darkly','journal','lumen','paper','readable','sandstone','simplex','slate','spacelab','superhero','united','yeti'];

  return themes.indexOf(themes) != -1;
}





// ADD & THEME array that is checked with [BOOTSTRAP & JADE]
// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// let nodeStatic = require('node-static');
// let file = new nodeStatic.Server('./public');
//
// http.createServer((req, res) => {
//
//   let html;
//   console.log('res.url:', req.url);
//
//   /*
//
// qs.parse('?this=that?color=blue')
// { '?this': 'that?color=blue' }
// > qs.parse('this=that&color=blue')
// { this: 'that', color: 'blue' }
// > '
//*/
// console.log('qsParts[0]: ', qsParts[0]);
// let url = qsParts[0];
// console.log('qsParts[1]: ', qsParts[1]);
// console.log('query: ', query);
// console.log('url: ', path);
//
// let qsParts = req.url.split('?');
// let path = query.theme;
//
// if(qsParts[1]){
//   var query = qs.parse(qsParts[1])
// };
//
//
// if(theme && checkTheme(query.theme)) {  // '&&'  if 'theme' is 'falsey' then returns first value.  if 'theme' is truthy, then it will
//   var theme = query.theme;
// }
//
// switch(path) {
//   case '/':
//   html = jade.renderFile('./views/index.jade', {
//     title: 'Jade App',
//     theme: theme});
//     res.end(html); break;
//     case '/contacts':{
//       let contacts = jade.renderFile('./views/contacts.jade',
//       theme: theme);
//       res.end(contacts);
//     } break;
//     // case '/math':
//   }
//
//
//   file.serve(req, res);  // node static plugin TYPE
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log(`Node server listening on port ${PORT}`);
// })
//
//
// function checkTheme(theme) {
//   theme = theme.toLowerCase();
//   let theme = ['cerulean',
//   'cosmo',
//   'cyborg',
//   'flatly',
//   'darkly',
//   'journal']
//
//   return themes.indexOf(theme);  // if it is in the array then indexOf will give us the index of the mathched case, otherwise -1
// }

// ADD & WORK with [node-static]
// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// let nodeStatic = require('node-static');
// let file = new nodeStatic.Server('./public');
//
// http.createServer((req, res) => {
//
//   switch(req.url) {
//     case '/':
//       let html = jade.renderFile('./views/index.jade');
//       res.end(html);
//   }
//
//
//   file.serve(req, res);  // node static plugin TYPE
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log(`Node server listening on port ${PORT}`);
// })

// EXTEND JADE
// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// http.createServer((req, res) => {
//   var  names = ['Joe', 'Bob', 'Joebob'];
//
//   let html = jade.renderFile('./index.jade', {
//     bacon: 'MY TITLE!',
//     name: 'Toby',
//     names: names
//   });
//
//   res.end(html);
//
//
//
//
//
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log(`Node server listening on port ${PORT}`);
// })

// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// http.createServer((req, res) => {
//
//   let html = jade.renderFile('./index.jade', {
//     bacon: 'MY TITLE!',
//     name: 'Toby',
//     names: ['Joe', 'Bob', 'Joebob']
//   });
//
//   res.end(html);
//
//
//
//
//
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log(`Node server listening on port ${PORT}`);
// })

// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// http.createServer((req, res) => {
//
//   let html = jade.renderFile('./index.jade', {
//     bacon: 'MY TITLE!',
//     name: 'Toby'
//   });
//
//   res.end(html);
//
//
//
//
//
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log(`Node server listening on port ${PORT}`);
// })

// 'use strict';
//
// const PORT = process.env.PORT || 3000;
//
//
// let jade = require('jade');
// let http = require('http');
//
// http.createServer((req, res) => {
//
//
//
//
//
//
//
//
//
// }).listen(PORT, err => {
//   if(err) return console.log(err);
//   console.log('Node server listening on port ${PORT}');
// })
//
// let html = jade.renderFile('./index.jade', {
//   bacon: 'MY TITLE!',
//   name: 'Toby'
// });
//
// console.log(html);

// 'use strict';
//
// let jade = require('jade');
//
// let html = jade.renderFile('./index.jade', {
//   bacon: 'MY TITLE!',
//   name: 'Toby'
// });
//
// console.log(html);

// 'use strict';
//
// let jade = require('jade');
//
// let html = jade.renderFile('./index.jade');
//
// console.log(html);
