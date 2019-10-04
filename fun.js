let currentQuestion = -1;
let answer = '';
let score = 0;
let arr=[];
let correctAns;
let tempAns;
let email;

$(document).ready(function(){
   $.ajax({
       url:'http://localhost:8100/api',
   }).done(function(data) {
       getNextQues(data);
       $('#next').click(function(){
           getNextQues(data);
       });
    }); 
})
function getNextQues(data){
       if(currentQuestion+1 < 10){
           currentQuestion += 1;
           $('#ques-div').text(data[currentQuestion].question);
           $('#option1').text(data[currentQuestion].options[0]);
           $('#option2').text(data[currentQuestion].options[1]);
           $('#option3').text(data[currentQuestion].options[2]);
           $('#option4').text(data[currentQuestion].options[3]);
           correctAns = data[currentQuestion].answer;
       }
}

$('.checkAnswer').click(function(){
   tempAns = $(this).index();
   arr.push(tempAns);
   console.log(arr);
});
$('#submit').click(function(){
    $('.exam-online').hide();
    $('#result-div').show();
    $('#next,#prev,#submit').hide();
    for(let i=0;i<arr.length;i++){
        console.log("bye");
        if(parseInt(data[i].answer)=== arr[i]){
            score+=1;
            console.log("hi");
        }
    }
    console.log("score");
    document.getElementById('score').innerHTML = score;
});
function showMail(){
    console.log("here");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "http://localhost:8100/",
        data:{
            'email':email
        },
        success: function(data){
           result=data;
           console.log(result);
           getNextQues();
           console.log(result[0].question);
        },
        error:function(err){
            console.log(err);
        }
    });
}


