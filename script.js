let popup = document.getElementById("popupForm");
let joinBtn = document.getElementById("joinBtn");
let closeBtn = document.getElementById("closeBtn");

/* Open Popup */
joinBtn.addEventListener("click", function(){
    popup.style.display = "block";
});

/* Close Popup */
closeBtn.addEventListener("click", function(){
    popup.style.display = "none";
});

/* Submit Form */
function submitForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        alert("Please fill all details!");
    }
    else{
        alert("Membership Joined Successfully!");
        popup.style.display = "none";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }
}

/* Outside Click Close */
window.addEventListener("click", function(event){
    if(event.target === popup){
        popup.style.display = "none";
    }
});