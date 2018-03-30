//SERVER page
var http=require('http');
var express=require('express');
var mysql=require('mysql');
var path = require('path');
var morgan = require('morgan');
var bodyParser=require('body-parser');
var multer  = require('multer');
var router=express.Router();
var fileUpload=require('express-fileupload');
var upload = multer({ dest: 'ui/uploads/' });
var xx=["setm.pdf","setn.pdf"],ii=0;
var app=express();
app.use(fileUpload());
app.post('/getPdf', function(req, res) {

  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('C:/Users/eswar/Desktop/login_aits/ui/'+xx[ii++%2], function(err) {
    if (err)
      return res.status(500).send(err);
res.sendFile(path.join(__dirname, 'ui', 'pdf_upload.html'));
  });
});
//app.use(morgan('combined'))
app.use(bodyParser.json());
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'exam'
});
connection.connect(function(error){
  if(error){
  console.log("error");
}
  else {
    console.log("connected");
  }
});
var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});
app.get('/result',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'result.html'));
});
app.get('/done',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'done.html'));
});

app.get('/image.gif',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'image.gif'));
});
app.get('/test/logo.jpg',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'logo.jpg'));
});
app.get('/test/image.gif',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'image.gif'));
});
app.get('/logo.jpg',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'logo.jpg'));
});
app.get('/love.svg',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'love.svg'));
});

app.get('/ui/main.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/jspdf.min.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'jspdf.min.js'));
});
app.get('/ui/jspdf.plugin.autotable.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'jspdf.plugin.autotable.js'));
});
app.get('/ui/jspdf.plugin.autotable.min.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'jspdf.plugin.autotable.min.js'));
});
app.get('/1set1.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '1set1.pdf'));
});
app.get('/1set2.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '1set2.pdf'));
});
app.get('/2set1.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '2set1.pdf'));
});
app.get('/2set2.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '2set2.pdf'));
});
app.get('/3set1.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '3set1.pdf'));
});
app.get('/3set2.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '3set2.pdf'));
});
app.get('/4set1.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '4set1.pdf'));
});
app.get('/4set2.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', '4set2.pdf'));
});
app.get('/set3.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'set3.pdf'));
});
app.get('/set4.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'set4.pdf'));
});

app.get('/ui/style.css',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/paper',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'paper.html'));
});
app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'i.html'));
});
app.get('/pdf_upload',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'pdf_upload.html'));
});
app.get('/admin',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'admin_login.html'));
});
app.get('/request/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   //var two=(m[1]);

       connection.query('SELECT questions_count,test_time from questionpapers where(passkey=?)',[one],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());
      }
      else
      {
      res.send(JSON.stringify(rows));
  }
});
});
app.get('/result_check/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);

       connection.query('SELECT  *from final_result where(roll=?)',[one],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());
      }
      else
      {
      res.send(JSON.stringify(rows));
  }
});
});
app.get('/getAnswers/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
  // var two=(m[1]);

       connection.query('SELECT  paper_set,answers from answersheets where(roll=?)',[one],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());
      }
      else
      {
      res.send(JSON.stringify(rows));
  }
});
});
app.get('/thankyou',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'logout.html'));
})
app.get('/student_login/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   var three=m[2];
   var four=m[3];
   var five=m[4];
   var six=1;

       connection.query('INSERT INTO student(s_roll,s_name,s_branch,s_year,s_section,status) VALUES (?,?,?,?,?,?)',[one,two,three,four,five,six],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());
      }
      else
      {
      res.sendFile(path.join(__dirname, 'ui', 'i.html'));
  }
});
});
app.get('/verify/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   var three=m[2];
   var four=m[3];
   var five=m[4];
   var six=m[5];
   var seven=m[6];
   var eight=m[7];
       connection.query('INSERT INTO answersheets(name,roll,year,section,branch,paper_set,answers,secretkey) VALUES (?,?,?,?,?,?,?,?)',[one,two,three,four,five,six,seven,eight],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());
      }
      else
      {
      /*  connection.query('SELECT questions_count,test_time from questionpapers where(year=? AND branch=?)',[one,two],function(err,rows,fields){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
       res.send(JSON.stringify(rows));
   }
 });*/
 res.send("thankyou");
  }
});
});
app.get('/admin_check/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var id=(m[0]);
   var pass=(m[1]);

       connection.query('SELECT status FROM admin where (username=? AND password=?)',[id,pass],function(err,rows,fields){
      if(err){
          res.status(500).send(err.toString());

      }
      else
      {
        if(JSON.stringify(rows).length==2)
        {
          res.send("Error");
      }
      else {
        res.send("Success");
      }
  }
});
});
app.get('/paper/paperset/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   var three=m[2];
   var four=m[3];
   var five=m[4];
   var six=m[5];
   //var five=m[4];

       connection.query('INSERT INTO questionpapers(test_name,questions_count,test_time,passkey,set1key,set2key) VALUES (?,?,?,?,?,?)',[one,two,three,four,five,six],function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());
      }
      else
      {
      //  res.send("Thank you test is created");
      res.sendFile(path.join(__dirname, 'ui', 'pdf_upload.html'));
  }
});
});
app.get('/storeKeyInAnswersheets/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   //var five=m[4];

       connection.query('UPDATE  answersheets SET originalkey=? WHERE roll=?',[two,one],function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());
      }
      else
      {
        res.send("Thank you test is created");
  }
});
});
app.get('/getGroupResult',function(req,res){
       connection.query('SELECT *from final_result',function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());
      }
      else
      {
         res.send(JSON.stringify(rows));
  }
});
});
app.get('/getValidatedSheets/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
       connection.query('SELECT *from answersheets',function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());
      }
      else
      {
         res.send(JSON.stringify(rows));
  }
});
});

app.get('/getKey/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
  var one=m[0];
  var two=m[1];
  if(two==1)
  {
  connection.query('SELECT set1key  FROM questionpapers where (passkey=?)',[one],function(err,rows,fields){
 if(err){
   //console.log(res);
     res.status(500).send(err.toString());
 }
 else
 {
   //res.send("Thank you test is created");
   res.send(JSON.stringify(rows));
}
});
}
else if(two==2)
{
  connection.query('SELECT set2key  FROM questionpapers where (passkey=?)',[one],function(err,rows,fields){
 if(err){
   //console.log(res);
     res.status(500).send(err.toString());
 }
 else
 {
   //res.send("Thank you test is created");
    res.send(JSON.stringify(rows));
}
});
}
});
app.get('/getKey1/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
  var one=m[0];
  //var two=m[1];
  connection.query('SELECT set1key,set2key,questions_count FROM questionpapers where (passkey=?)',[one],function(err,rows,fields){
 if(err){
   //console.log(res);
     res.status(500).send(err.toString());
 }
 else
 {
   //res.send("Thank you test is created");
   res.send(JSON.stringify(rows));
}
});
/*else if(two==2)
{
  connection.query('SELECT set2key  FROM questionpapers where (passkey=?)',[one],function(err,rows,fields){
 if(err){
   //console.log(res);
     res.status(500).send(err.toString());
 }
 else
 {
   //res.send("Thank you test is created");
    res.send(JSON.stringify(rows));
}
});
}*/
});
app.get('/finalresult/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   var three=m[2];
   var four=m[3];
   var five=m[4];
   var six=m[5];


       connection.query('INSERT INTO final_result(name,roll,year,section,branch,score) VALUES (?,?,?,?,?,?)',[one,two,three,four,five,six],function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());
      }
      else
      {
      //  res.send("Thank you test is created");
          res.sendFile(path.join(__dirname, 'ui', 'logout.html'));
  }
});
});
var port = 3001;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});
