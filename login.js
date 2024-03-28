
const form = document.querySelector("form")

function signUp() {
    const userEmail = document.getElementById("userEmail")
    const userPassword = document.getElementById("userPassword")
    const signIn = document.getElementById("sign-In")
    signIn.style.display = "none"
    

    form.addEventListener("submit", function (e) {
        e.preventDefault()
        if (userEmail.value === "") {
            Swal.fire({
                icon: "error",
                title: "Email should not be empty",
            });

        }
        else if (userPassword.value === "") {
            Swal.fire({
                icon: "error",
                title: "Password should not be empty",
            });
        }
        else {
            Swal.fire({
                title: "Registered Succesfully!",
                text: "Now Sign In!",
                imageUrl: "https://i.gifer.com/origin/98/98a20dabf81cf09a273331c0965716cd_w200.webp",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
         SignIn()

        }
        const userData = {
            email: userEmail.value,
            password: userPassword.value,
        }
        localStorage.setItem("userData", JSON.stringify(userData))
        let getUserdata = JSON.parse(localStorage.getItem("userData"))
    })

}
signUp()

function SignIn(){
    const submitButton = document.querySelector('#sign-In-Submit')
    submitButton.innerHTML = "Sign In"
    const signUP = document.getElementById("sign-up")
    signUP.style.display = "none"

    const signIn = document.getElementById("sign-In")
    signIn.style.display = "block"   

 validationSignIn()
}

function validationSignIn(){

  const signInEmail = document.getElementById("userEmail-sign-in")
  const signInPassword = document.getElementById("userPassword-sign-in")
  const signInSubmit = document.getElementById("sign-In-Submit")
  signInSubmit.addEventListener("click",function(e){
    e.preventDefault()
      let getUserdata = JSON.parse(localStorage.getItem("userData"))
    if(signInEmail.value !== getUserdata.email){
        Swal.fire({
            icon: "error",
            title: "Email is Incorrect",
        });

    }
    else if(signInPassword.value !== getUserdata.password){
        Swal.fire({
            icon: "error",
            title: "Password is Incorrect",
        });
    
    }
    else{
        redirectQuiz()
      
    }
  })
}
function redirectQuiz (){
    location.href="QuizSection.html";
}