let signUp=document.querySelector('form');

signUp.addEventListener("submit", (e) => {
    e.preventDefault();
    signup();
    alert("SignupSuccess")
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);
});

function signup() {
    let userObj = {
        email: signUp.email.value,
        username: signUp.username.value
    };
    console.log(userObj);
    fetch(`https://wefb.onrender.com/user/register`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}