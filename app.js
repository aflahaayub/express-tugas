const express= require('express');
const app = express();
const os = require('os');

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  const model = os.cpus()[0].model;
  const speed = os.cpus()[0].speed;
  let fmemory = os.freemem();
  const user = os.userInfo().username;
  res.render('comp',{model, speed, fmemory, user} );
} )

app.listen(1000, ()=>{
  console.log('LISTENING ON PORT 1000')
})