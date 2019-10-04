let currentQuestion = -1;
let answer = '';
let score = 0;
let arrStore=[];
let correctAns;
let tempAns;
let email;
// fetch data from mongodb database
$(document).ready(function(){
   $.ajax({
       url:'http://localhost:8100/api',
   }).done(function(data) {
       getQues(data);
       $('#next').click(function(){
           getQues(data);
       });
       $('#submit').click(function(){
           $('#score').show();
           $('#next,#submit,.ans,.que').hide();
        for(let i=0;i<arrStore.length;i++){
            if((data[i].ans)=== arrStore[i]){
                score++;
            }
        }
        console.log(score);
        document.getElementById('score').innerHTML = score;
    });
    }); 
})
// Display data 
function getQues(data){
       if(currentQuestion+1 < 10){
           currentQuestion++;
           $('#ques-div').text(data[currentQuestion].question);
           $('#option1').text(data[currentQuestion].options[0]);
           $('#option2').text(data[currentQuestion].options[1]);
           $('#option3').text(data[currentQuestion].options[2]);
           $('#option4').text(data[currentQuestion].options[3]);
           correctAns = data[currentQuestion].answer;
       }
}
// Store selected answer in array
$('.checkAnswer').click(function(){
   tempAns = $(this).text();
   arrStore.push(tempAns);
//    console.log(arrStore);
});

// store email into mongodb database
$(".topic_submit").click(function() {  
    var topic = $("#mail").val();
    console.log("here");
    $.ajax({
        type: "POST",
        dataType: "text",
        url: "http://localhost:8100/",
        data:{
            'email': topic
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
});


