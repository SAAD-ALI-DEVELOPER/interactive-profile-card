function changeProfile() {

    document.getElementById("profileTitle").innerHTML =
        "NEW DEVELOPER DETECTED";

    document.getElementById("profileName").innerHTML =
        "Harry";

    document.getElementById("profileRole").innerHTML =
        "Full Stack Developer";

    document.getElementById("profileDescription").innerHTML =
        "Building modern web applications with JavaScript, APIs and backend technologies.";
}


function changeImage() {
    document.getElementById("profileImage").src ="assets/profile.2.jpg";
}


function showName() {
    var name = document.getElementById("userName").value;
    document.getElementById("welcomeMessage").innerHTML =
        "> Hello, " + name + "! Welcome to the system.";
}

function changeStatus() {
    document.getElementById("status").innerHTML =
        "STATUS: AVAILABLE FOR PROJECTS";
}

function imageHover() {
    document.getElementById("profileImage").style.transform =
        "scale(1.08)";
}



function imageOut() {
    document.getElementById("profileImage").style.transform =
        "scale(1)";
}
