function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");

    if (skills == "") {
        skillsError.innerHTML = "Skills cannot be empty";
        return false;
    }
    else {
        skillsError.innerHTML = "";
        return true;
    }
}