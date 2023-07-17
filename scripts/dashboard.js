const mainContsiner = document.getElementById("main_container");
const BaseServerUrl = `https://wefb.onrender.com`


fetchAndRenderData();

function fetchAndRenderData(){
    fetch(`${BaseServerUrl}/quiz/allquiz`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);

        renderDom(data);
    })



}


function renderDom(arr=[]){
    mainContsiner.innerHTML=null;

    arr.forEach((el)=>{
        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.innerText = el.title;


        const des =  document.createElement("p");
        des.innerText=el.description

        const noOfQues =  document.createElement("p");
        noOfQues.innerText = `Questions : ${el.questions.length}`
        const creator =  document.createElement("p");
        creator.innerText=`Created By :- ${el.creator}`
        const takeQuiz =  document.createElement("button"); 
        takeQuiz.innerText = 'Take Quiz'



       takeQuiz.addEventListener("click",()=>{
    localStorage.setItem("quizId",el._id);
    window.location.href = "./quiz.html";
})
        const leaderboard =  document.createElement("button");
        leaderboard.innerText="Leaderboard"

        leaderboard.addEventListener('click',()=>{
            window.location.href="./leaderboard.html"
        })

        card.append(title,des,creator,noOfQues,takeQuiz,leaderboard);


        mainContsiner.append(card)
    })
   
}



