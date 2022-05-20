console.log("Test")
const password = document.getElementById('password')
const submit = document.getElementById('submit');



const toggle = () => {
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}


submit.addEventListener('click', toggle);
