//Client side javascript file
/*document.addEventListener("keydown",function(event){
if(event.keycode==122&&(localStorage.getItem("keycount")==="0"))
{
  alert("event");
  localStorage.setItem("keycount","1");
}
else if(event.keycode&&(localStorage.getItem("keycount")==="1")) {
  alert("event");
  event.preventDefault();
}
});*/
/*document.addEventListener('contextmenu',function(event){
  event.preventDefault();
});*/
//variable declaration
var fourw="",fivew=0,sixw=0,sevenw=0,eightw=0;
var secretMob="",dop;

var column1=new Array();
var column2=new Array();
var rows1=new Array();
var rows2=new Array();
var onew="",twow="",threew="";
var lengthOfFinalAnswerKey=0;
var result_roll,cfg="",result_code, print_set,print_answers,lastCharOfRoll="", totalQuestionsNumber=0,abc="", timecount=0,answer,candidate_name="",cnadidate_roll="",candidate_score="",count=1,flag=0,c=0,x,clickedButtonId=0,getOption,time=0,i=0,b=0,seconds=60,hours,minutes,z=0,onem=0,five=0,answer_string="",xx,mm,ff,fff,minimumTime=0;
function onOptionButtonClick()   //function which triggers on clicking the buttons in status area
{
  clickedButtonId=this.id;
  document.getElementById('currentQuestion').innerHTML=clickedButtonId;
  getOption=localStorage.getItem(clickedButtonId);
  if(getOption=="A")
  {
    document.getElementById('A').checked=true;
  }
  else if(getOption=="B")
  {
    document.getElementById('B').checked=true;
  }
  else if(getOption=="C")
  {
    document.getElementById('C').checked=true;
  }
  else if(getOption=="D")
  {
    document.getElementById('D').checked=true;
  }
  else {
    document.getElementById('A').checked=false;
    document.getElementById('B').checked=false;
    document.getElementById('C').checked=false;
    document.getElementById('D').checked=false;

  }
}
function first()  //function for displaying first 50 buttons in the status area
{
  document.getElementById('option_buttons_first').style.display="block";
  document.getElementById('option_buttons_second').style.display="none";
}
function second() //function for displaying first 50 buttons in the status area
{
  document.getElementById('option_buttons_first').style.display="none";
  document.getElementById('option_buttons_second').style.display="block";
}
/*function setFlag()
{
var pos=document.getElementById('currentQuestion').innerHTML;
document.getElementById(pos).className="w3-btn w3-yellow";
document.getElementById(this.id).className="w3-btn w3-yellow";
}*/
function showNextQuestion() //function which triggers on clicking the next button
{
  answer="NULL";
   count=document.getElementById('currentQuestion').innerHTML;

  if(document.getElementById('A').checked)
  {
    answer="A";
  }
  else if(document.getElementById('B').checked)
  {
    answer="B";
  }
  else if(document.getElementById('C').checked)
  {
    answer="C";
  }else if(document.getElementById('D').checked)
  {
    answer="D";
  }
  else
  {
    answer="NULL";
  }
    localStorage.setItem(count,answer);
  if(flag==0)
  {
    setButtonColors(count,answer,0); //for setting the colors for buttons
  }
  else {
    setButtonColors(count,answer,1);
  }
}
function restoreStates()  //for restoring the states of the answered questions when clicked on previous button
{
  var v=document.getElementById('currentQuestion').innerHTML;
  v++;
  selectedOption=localStorage.getItem(v);
if(selectedOption=="A")
{
  document.getElementById('A').checked=true;
}
else if(selectedOption=="B")
{
  document.getElementById('B').checked=true;
}
else if(selectedOption=="C")
{
  document.getElementById('C').checked=true;
}
else if(selectedOption=="D")
{
  document.getElementById('D').checked=true;
}

}
function showPreviousQuestion() //function which triggers on clicking previous button
{
  var y=document.getElementById('currentQuestion').innerHTML;
  if(y>1)
  {
  y--;
  count=y;
  document.getElementById('currentQuestion').innerHTML=count;
  selectedOption=localStorage.getItem(count);
if(selectedOption=="A")
{
  document.getElementById('A').checked=true;
}
else if(selectedOption=="B")
{
  document.getElementById('B').checked=true;
}
else if(selectedOption=="C")
{
  document.getElementById('C').checked=true;
}
else if(selectedOption=="D")
{
  document.getElementById('D').checked=true;
}
else {
  document.getElementById('A').checked=false;
  document.getElementById('B').checked=false;
  document.getElementById('C').checked=false;
  document.getElementById('D').checked=false;
}
}
}
function setButtonColors(a,b,c)  //sets the colors for buttons in the status area.
{
  if(b!="NULL"&&c==0)
  {
  document.getElementById(a).className="w3-btn w3-green";
}
else if(b=="NULL")
{
  document.getElementById(a).className="w3-btn w3-red";
}
else if(c==1) {
  document.getElementById(a).className="w3-btn w3-yellow";
}
onClickNext(); //for storing the provided  answer for current question.
}
function onClickNext() //for storing the providing answer for current question.
{
   x=document.getElementById('currentQuestion').innerHTML;
  if(x<c)
  {
  x++;
  count=x;
  var g=localStorage.getItem(count);
  if(g=="A"||g=="B"||g=="C"||g=="D"||g=="NULL")
  {
    if(g=="A")
    {
      document.getElementById('A').checked=true;
    }
    else if(g=="B")
    {
      document.getElementById('B').checked=true;
    }
    else if(g=="C")
    {
      document.getElementById('C').checked=true;
    }
    else if(g=="D")
    {
      document.getElementById('D').checked=true;
    }
    else {
      document.getElementById('A').checked=false;
      document.getElementById('B').checked=false;
      document.getElementById('C').checked=false;
      document.getElementById('D').checked=false;
    }
  }
  else {
  document.getElementById('A').checked=false;
  document.getElementById('B').checked=false;
  document.getElementById('C').checked=false;
  document.getElementById('D').checked=false;
}
document.getElementById('currentQuestion').innerHTML=x;
}
}
function create(m) //for creating the buttons dynamically in the status area.
{
  var i=0;
  for( i=1;i<=m;i++)
   {
 var btn = document.createElement("BUTTON");
var t = document.createTextNode(i);
btn.appendChild(t);
btn.id=i;
btn.className="w3-btn w3-black w3-text-white";
btn.addEventListener("click",onOptionButtonClick,false);
if(i<=50)
{
  document.getElementById('option_buttons_first').appendChild(btn);
}
else {
  document.getElementById('option_buttons_second').appendChild(btn);
}
  document.getElementById('option_buttons_second').style.display='none';

}
}
function setTimerCounter() // function which triggers on loading the login.html page for setting the counters for different timed actions.
{
  localStorage.clear();
  localStorage.setItem("kk","1");
    localStorage.setItem("timecount",0);
    localStorage.setItem("keycount","0");
    localStorage.setItem("buttoncount","0");
}
function startTimer() //function for timer
{
  seconds=localStorage.getItem("seconds");
  minutes=localStorage.getItem("minutes");
  hours=localStorage.getItem("hours");


  if(hours>=0&&minutes>=0)
  {
  seconds--;
}

if(minutes==0&&hours==0&&seconds==0)
{
  endTest(1);
}
if(minutes==5&&hours==0&&five==0)
{
  alert("Hurry up!! Last five minutes");
  five=1;
}
if(minutes==1&&hours==0&&onem==0&&seconds==0)
{
  alert("Hurry up!! Last one minute");
  onem=1;
}


  if(seconds==0&&hours>=0&&minutes>=0)
  {
    timecount=localStorage.getItem("timecount");
    timecount++;
    localStorage.setItem("timecount",timecount);
    minutes--;
    seconds=60;
  }
  if(timecount>=minimumTime)
  {
    document.getElementById('endtestbutton').disabled=false;
    localStorage.setItem("buttoncount","1");
  }
  else if(localStorage.getItem("buttoncount")=="0")  {
    document.getElementById('endtestbutton').disabled=true;
  }
  else {
    document.getElementById('endtestbutton').disabled=false;
  }
  if(minutes==0&&hours>0)
  {
    minutes=59;
    hours--;

  }
  if(minutes==-1&&hours==0&&seconds==60)
  {
    endTest(1);
  }
  localStorage.setItem("seconds",seconds);
  localStorage.setItem("hours",hours);
  localStorage.setItem("minutes",minutes);
  if(hours<10)
  {
  document.getElementById('hour').innerHTML="0"+hours;
}
else {
  document.getElementById('hour').innerHTML=hours;
}
if(seconds<10)
{
  document.getElementById('sec').innerHTML="0"+seconds;
}
else {
  document.getElementById('sec').innerHTML=seconds;
}
if(minutes<10)
{
  document.getElementById('min').innerHTML="0"+minutes;
}
else {
  document.getElementById('min').innerHTML=minutes;
}
}

function getStudentData()  //function which triggers on loading the i.html page.It performs some pre processing activities like storing the variables in local storage
{
  var year=localStorage.getItem("year");
var branch=localStorage.getItem("branch")
var key=localStorage.getItem("key");
  var s="/request/"+key;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var d=(JSON.parse(xhttp.responseText));
       c=d[0]["questions_count"];
       totalQuestionsNumber=c;
       time=d[0]["test_time"];
       minimumTime=time*(1/4);
      if((localStorage.getItem("kk"))==="1")
      {
      hours=parseInt(time/60);
       minutes=time%60;
      seconds=60;
      minutes=minutes-1;
      localStorage.setItem("hours",hours);
      localStorage.setItem("minutes",minutes);
      localStorage.setItem("seconds",seconds);
      document.getElementById('hour').innerHTML=localStorage.getItem("hours");
      document.getElementById('min').innerHTML=localStorage.getItem("minutes");
      document.getElementById('sec').innerHTML=localStorage.getItem("seconds");
      localStorage.setItem("kk","0");
     startTimer();
      window.setInterval(startTimer,1000); //for calling the timer function at an interval of 1 second.
    }
    else {
      document.getElementById('hour').innerHTML=localStorage.getItem("hours");
      document.getElementById('min').innerHTML=localStorage.getItem("minutes");
      document.getElementById('sec').innerHTML=localStorage.getItem("seconds");
     startTimer();
      window.setInterval(startTimer,1000);
    }
        create(c); //creates the buttons i the status area dynamically
        for(i=1;i<=c;i++)
        {
          b=localStorage.getItem(i);
          if(b=="NULL")
          {
            document.getElementById(i).className="w3-btn w3-red";
          }
          else if(b=="A"||b=="B"||b=="C"||b=="D") {
            document.getElementById(i).className="w3-btn w3-green";
          }
          else {
            document.getElementById(i).className="w3-btn w3-black";
          }
        }
        var first_answer=localStorage.getItem(1);
        if(first_answer=="A")
        {
          document.getElementById('A').checked=true;
        }
        else if(first_answer=="B")
        {
          document.getElementById('B').checked=true;
        }
        else if(first_answer=="C")
        {
          document.getElementById('C').checked=true;
        }
        else if(first_answer=="D")
        {
          document.getElementById('D').checked=true;
        }
        else {
              document.getElementById('A').checked=false;
              document.getElementById('B').checked=false;
              document.getElementById('C').checked=false;
              document.getElementById('D').checked=false;
        }
           mm=localStorage.getItem("roll");
           ff=mm[mm.length-1];
           xx=parseInt(ff)
           var cv=localStorage.getItem("year");
          if(xx%2==0&&cv=="1")
          {
            document.getElementById('pdf').src="1set1.pdf";
          }
          else if(xx%2!=0&&cv=="1")
          {
            document.getElementById('pdf').src="1set2.pdf";
          }
          else if(xx%2==0&&cv=="2")
          {
            document.getElementById('pdf').src="2set1.pdf";
          }
          else if(xx%2!=0&&cv=="2")
          {
            document.getElementById('pdf').src="2set2.pdf";
          }
          else if(xx%2==0&&cv=="3")
          {
            document.getElementById('pdf').src="3set1.pdf";
          }
          else if(xx%2!=0&&cv=="3")
          {
            document.getElementById('pdf').src="3set2.pdf";
          }
          else if(xx%2==0&&cv=="4")
          {
            document.getElementById('pdf').src="4set1.pdf";
          }
          else if(xx%2!=0&&cv=="4")
          {
            document.getElementById('pdf').src="4set2.pdf";
          }
        /*  else if(localStorage.getItem("section")=="C")
          {
            document.getElementById('pdf').src="set3.pdf";
          }
          else if(localStorage.getItem("section")=="D")
          {
            document.getElementById('pdf').src="set4.pdf";
          }*/
 }
 else if(this.status==500) {
 }
};
xhttp.open("GET", s, true);
xhttp.send();
  document.getElementById('roll_number').innerHTML=localStorage.getItem("roll")+"|";
    document.getElementById('stud_name').innerHTML=localStorage.getItem("name")+"|";
      document.getElementById('stud_branch').innerHTML=localStorage.getItem("branch")+"|";
        document.getElementById('stud_year').innerHTML=localStorage.getItem("year")+"|";
          document.getElementById('hour').innerHTML=localStorage.getItem("hours");
          document.getElementById('min').innerHTML=localStorage.getItem("minutes");
          document.getElementById('sec').innerHTML=localStorage.getItem("seconds");
}
function student_login() //function which stores the details of the logged in students in the database
{

  var roll=document.getElementById('student_roll').value;
  var name=document.getElementById('student_name').value;
  var y=document.getElementById('student_year');
    var year = y.options[y.selectedIndex].text;
    var b=document.getElementById('student_branch');
      var branch = b.options[b.selectedIndex].text;
      var s=document.getElementById('student_section');
      var section = s.options[s.selectedIndex].text;
      var key=document.getElementById('key').value;
      if(roll==""||name==""||key=="")
      {
        alert("Please fill all the details")
      }
      else if(roll.length!=10)
      {
        alert("Please enter a valid Roll number");
      }
      else{
      localStorage.setItem("name", name);
      localStorage.setItem("branch", branch);
      localStorage.setItem("year", year);
      localStorage.setItem("section", section);
      localStorage.setItem("roll", roll);
        localStorage.setItem("key", key);
      var s="/student_login/"+roll+"$"+name+"$"+branch+"$"+year+"$"+section+"$"+key;
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
              window.open("/test","_self");
     }
     else if(this.status==500) {
       alert("It seems you've already logged in.You can take the test only once")
       location.reload();
     }
    };
    xhttp.open("GET", s, true);
    xhttp.send();
}
}
function makeQuestionPaper()  //function to store the details of questionpaper in the database.
{
  var testName=document.getElementById('test_name').value;
  var noOfQuestion=document.getElementById('noOfQuestions').value;
  var testDUration=document.getElementById('testTime').value;
  var secretKey=document.getElementById('secretkey').value;
  var set1Key=document.getElementById('key_set1').value;
  var set2Key=document.getElementById('key_set2').value;
/*  var y=document.getElementById('target_year');
    var year = y.options[y.selectedIndex].text;
    var b=document.getElementById('target_branch');
      var branch = b.options[b.selectedIndex].text;*/
  if(testName==""||noOfQuestion==""||testDUration=="")
{
  alert("Please Fill all the fields");
}
else {
  var s="/paper/paperset/"+testName+"$"+noOfQuestion+"$"+testDUration+"$"+secretKey+"$"+set1Key+"$"+set2Key;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.open('/pdf_upload','_self');
 }
};
xhttp.open("GET", s, true);
xhttp.send();
}

}
function admin_log() //for admin login
{
  var id=document.getElementById('admin_id').value;
  var pass=document.getElementById('admin_pass').value;
  var s="/admin_check/"+id+"$"+pass;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(this.responseText=="Success")
      {
     window.open("/paper","_self");
   }
   else if(this.responseText="Error") {
     alert("Incorrect credentials");
   }
 }

};
xhttp.open("GET", s, true);
xhttp.send();

}
function setUpload(x)
{
  var noOfSets=Number(x);
  switch(noOfSets)
  {
    case 1:{
      document.getElementById('s1').style.display='block';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 2:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='block';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 3:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='block';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 4:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='block';
      break;
    }
  }
}
function endTest(v) //for ending the test
{
  var k=1,answers=[],answered=0,unanswered=0;
  for(k=1;k<=c;k++)
  {
    answers[k]=localStorage.getItem(k);
    if(answers[k]=="NULL")
    {
      unanswered++;
    }
    else if(answers[k]=="A"||answers[k]=="B"||answers[k]=="C"||answers[k]=="D"){
      answered++;
    }
    else {
      unanswered++;
    }
    if(answers[k]=="A"||answers[k]=="B"||answers[k]=="C"||answers[k]=="D")
    {
    answer_string+=answers[k];
  }
  else if(answers[k]=="NULL") {
    answer_string+="&";
  }
  else if(answers[k]==null) {
    answer_string+="&";
  }
  }
  console.log(answers);
  if(v==0)
  {
  if(confirm("Do you want to submit??\nAnswered:"+answered+"\nUnanswered:"+unanswered))
  {
    sendAnswerSheet();
//localStorage.clear();
  // window.open("/thankyou","_self");
  }
}
else if(v==1)
{
  sendAnswerSheet();
  // window.open("/thankyou","_self");
}
}
function sendAnswerSheet()
{
    var final_name=localStorage.getItem("name");
    var final_roll=localStorage.getItem("roll");
    var final_section=localStorage.getItem("section");
    var final_branch=localStorage.getItem("branch");
    var final_year=localStorage.getItem("year");
    var secretkey=localStorage.getItem("key");
    var set;
    if(xx%2==0)
    {
      set=1;
    }
    else {
      set=2;
    }
    var s="/verify/"+final_name+"$"+final_roll+"$"+final_year+"$"+final_section+"$"+final_branch+"$"+set+"$"+answer_string+"$"+secretkey;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        checkAnswers(secretkey,set,final_roll);
   }
  };
  xhttp.open("GET", s, true);
  xhttp.send();
}
function checkAnswers(secretkey,set,final_roll)
{
  var s="/getKey/"+secretkey+"$"+set;
  var c="";
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var d=(JSON.parse(xhttp.responseText));
     if(set==1)
      {
       c=d[0]["set1key"];
    }
    else if(set==2)
    {
      c=d[0]["set2key"];
    }
    //alert(set+c);
    //alert(d[0]["set1Key"]);
    //alert(this.responseText+d[0]["set1key"]);
    storeKeyInAnswersheets(c,final_roll);
    validate(c);
  //   window.open("/thankyou","_self");
 }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function storeKeyInAnswersheets(c,final_roll)
{
  var s="/storeKeyInAnswersheets/"+final_roll+"$"+c;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Thank you!! your test is sumitted");
 }
};
xhttp.open("GET", s, true);
xhttp.send();

}
function validate(c)
{
  var score=0;
  var candidateAnswers=answer_string;
  var originalKey=c;
  abc=originalKey;
  for(var fg=0;fg<c.length;fg++)
  {
    if(candidateAnswers.charAt(fg)==originalKey.charAt(fg))
    {
      score++;
    }
  }
  storeResults(score);
}
function storeResults(score)
{
  var final_name=localStorage.getItem("name");
  var final_roll=localStorage.getItem("roll");
  var final_section=localStorage.getItem("section");
  var final_branch=localStorage.getItem("branch");
  var final_year=localStorage.getItem("year");
  var s="/finalresult/"+final_name+"$"+final_roll+"$"+final_year+"$"+final_section+"$"+final_branch+"$"+score;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      localStorage.clear();
      window.open("/thankyou","_self");
 }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function result_check()
{
  candidate_name="",candidate_roll="",candidate_score="";
   result_roll=document.getElementById('result_roll').value;
   result_code=document.getElementById('result_questionpapercode').value;
var s="/result_check/"+result_roll+"$"+result_code;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
//    alert(this.responseText);
document.getElementById('re_box').style.display="block";
document.getElementById('re_check').style.display="none";
var gggg=(JSON.parse(xhttp.responseText));
candidate_name=""+(gggg[0]["name"]).toUpperCase();
candidate_roll=""+gggg[0]["roll"];
lastCharOfRoll=candidate_roll.charAt(candidate_roll.length-1);
candidate_score=""+gggg[0]["score"];
document.getElementById('re_roll').innerHTML="NAME:"+(gggg[0]["name"]).toUpperCase();
document.getElementById('re_name').innerHTML="ROLL:"+gggg[0]["roll"];
document.getElementById('re_year').innerHTML="YEAR:"+gggg[0]["year"];
document.getElementById('re_branch').innerHTML="SECTION:"+gggg[0]["section"];
document.getElementById('re_section').innerHTML="BRANCH:"+gggg[0]["branch"];
document.getElementById('re_score').innerHTML="MARKS:"+gggg[0]["score"];
}
};
xhttp.open("GET", s, true);
xhttp.send();

}
function getCandidateGivenAnswers(c_roll)
{
  var s="/getAnswers/"+c_roll;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var d=(JSON.parse(xhttp.responseText));
      print_set=d[0]["paper_set"];
      print_answers=d[0]["answers"];
      totalQuestionsNumber=print_answers.length;

  }
  };
  xhttp.open("GET", s, true);
  xhttp.send();

}


function print_individualresult()
{
  //var print_set=0;
  /*if(lastCharOfRoll%2==0)
  {
    print_set=1;
  }
  else if(lastCharOfRoll%2!=0)
  {
    print_set=0;
  }*/
  getCandidateGivenAnswers(candidate_roll);
  var sm="/getKey1/"+result_code;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       dop=(JSON.parse(xhttp.responseText));
     if(lastCharOfRoll%2==0)
      {
       secretMob=dop[0]["set1key"];
    }
    else if(lastCharOfRoll%2!=0)
    {
      secretMob=dop[0]["set2key"];
    }
    lengthOfFinalAnswerKey=dop[0]["questions_count"];
    //alert(set+c);
    //alert(d[0]["set1Key"]);
    //alert(this.responseText+d[0]["set1key"]);
  //  validate(c);
  //   window.open("/thankyou","_self");
 }
};
xhttp.open("GET", sm, true);
xhttp.send();
//  alert(cfg);
   column1=["Name","Roll","Marks"];
   rows1=[[candidate_name,candidate_roll,candidate_score]];
   column2=["Q.no","Given answer","Correct answer","status","score"];
   rows2=new Array();
  var ddd=0,dfg=0;
  /*for(ddd=0;ddd<totalQuestionsNumber;ddd++)
  {
    for(dfg=0;dfg<2;dfg++)
    {
      rows2[ddd][0]=ddd+1;
      rows2[ddd][1]=print_answers.charAt(ddd);
      rows2[ddd][2]=secretMob.charAt(ddd);
    }
  }*/
  for(ddd=0;ddd<lengthOfFinalAnswerKey;ddd++)
  {
    onew=ddd+1;
    if(print_answers.charAt(ddd)!="&")
    {
    twow=print_answers.charAt(ddd);
  }
  else if(print_answers.charAt(ddd)=="&")
  {
    twow="NOT ANSWERED";
  }
    threew=secretMob.charAt(ddd);
    if(secretMob.charAt(ddd)==print_answers.charAt(ddd))
    {
      fourw="correct";
      fivew=1;
    }
    else if(secretMob.charAt(ddd)!=print_answers.charAt(ddd))
    {
      fourw="Incorrect";
      fivew=0;
    }
    rows2[ddd]=new Array(onew,twow,threew,fourw,fivew);
  }
  var doc=new jsPDF();
//  doc.text('Annamacharya institute of technology and sciences');
doc.autoTable(column1,rows1);
doc.addPage();
doc.autoTable(column2,rows2);
  doc.save(candidate_roll+'.pdf');
}
function onre_check()
{
  document.getElementById('re_menu').style.display="none";
  //document.getElementById('re_group').style.display="none";
  document.getElementById('re_sheets').style.display="none";
  document.getElementById('re_check').style.display="block";

}
function onre_group()
{
  document.getElementById('re_menu').style.display="none";
  //document.getElementById('re_group').style.display="block";
  document.getElementById('re_sheets').style.display="none";
  document.getElementById('re_check').style.display="none";
  var s="/getGroupResult/"
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       dop=(JSON.parse(xhttp.responseText));
       //alert(dop);
       print_groupresult(dop);
 }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function print_groupresult(dop)
{
  column1=["Name","Roll","Year","Section","Branch","Marks"];
  var r1=new Array();
  var zxc=0;
  for(zxc=0;zxc<dop.length;zxc++)
  {
    onew=(dop[zxc]["name"]).toUpperCase();
    twow=dop[zxc]["roll"];
    threew=dop[zxc]["year"];
    fourw=dop[zxc]["section"];
    fivew=dop[zxc]["branch"];
    sixw=dop[zxc]["score"];
    r1[zxc]=new Array(onew,twow,threew,fourw,fivew,sixw);
    var doc=new jsPDF();
  //  doc.text('Annamacharya institute of technology and sciences');

  }
  doc.autoTable(column1,r1);
  doc.save('group.pdf');
}
function onre_sheets()
{
  document.getElementById('re_menu').style.display="none";
//  document.getElementById('re_group').style.display="none";
  document.getElementById('re_sheets').style.display="block";
  document.getElementById('re_check').style.display="none";

}
/*function result_check_group()
{
  var qCode=document.getElementById('result_questionpapercode_group').value;

}*/
function result_check_sheets()
{
    var result_check_sheets_qcode=document.getElementById('result_questionpapercode_sheets').value;
  //  alert(result_check_sheets_qcode);
  var s="/getValidatedSheets/"+result_check_sheets_qcode;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       dop=(JSON.parse(xhttp.responseText));
       //alert(dop);
       print_groupvalidatedsheets(dop);
 }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function print_groupvalidatedsheets(dop)
{
  var doc=new jsPDF();
  var dfgh=0,dirr=0;
  column2=["Q.no","Given answer","Correct answer","status","score"];
  var rz=new Array();
  var x1,x2,x3,x4,x5;
  for(dfgh=0;dfgh<dop.length;dfgh++)
  {
    onew=(dop[dfgh]["name"]).toUpperCase();
    twow=dop[dfgh]["roll"];
    threew=dop[dfgh]["year"];
    fourw=dop[dfgh]["section"];
    fivew=dop[dfgh]["branch"];
    sixw=dop[dfgh]["paper_set"];
    sevenw=dop[dfgh]["answers"];
    eightw=dop[dfgh]["originalKey"];
    doc.text(0,10,'Roll:'+twow);
    doc.text(50,10,'Branch:'+fivew);
    doc.text(100,10,'Paperset:'+sixw);
  //  doc.text(60,10,fivew);
    //doc.text(80,10,fourw);
  //  doc.text(100,10,''+sixw);

    for( dirr=0;dirr<(dop[0]["originalkey"]).length;dirr++)
    {
        x1=dirr+1;
        if(sevenw.charAt(dirr)!='&')
        {
        x2=sevenw.charAt(dirr);
      }
      else if(sevenw.charAt(dirr)=='&')
      {
        x2="Not answered";
      }
        x3=(dop[dfgh]["originalkey"]).charAt(dirr);
        if(x2==x3)
        {
          x4="Correct";
          x5=1;
        }
        else if(x2!=x3)
        {
          x4="Incorrect"
          x5=0;
        }
        rz[dirr]=new Array(x1,x2,x3,x4,x5);
    }
    doc.autoTable(column2,rz);
    doc.addPage();
  }
  doc.save('Sheets.pdf');


}
