const quizId = localStorage.getItem("quizId");
const mainDiv = document.getElementById("question_Div");

const BaseServerUrl = `https://quizapp-backend-zqr0.onrender.com`




function fetchAndRenderQuestion(){
    fetch(`${BaseServerUrl}/quiz/${quizId}`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data.questions);
        renderQuestion(data.questions)
    })
}


function renderQuestion(arr=[]){
   mainDiv.innerHTML=null;
//    let i =0;
  for(let i=0;i<arr.length;i++){
        const question = document.createElement("h5");
    question.innerText=arr[i].title;


    const option1 = document.createElement("p");

    option1.innerText = arr[i].answerOptions[0];

    const option2 = document.createElement("p");
    option2.innerText = arr[i].answerOptions[1];

    const option3 = document.createElement("p");
    option3.innerText = arr[i].answerOptions[2];

    const option4 = document.createElement("p");

    option4.innerText = arr[i].answerOptions[3];

    // const nextBtn = 


    mainDiv.append(question,option1,option2,option3,option4)
   }
}



fetchAndRenderQuestion();