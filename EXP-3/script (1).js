document.getElementById("careerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var position = document.getElementById("position").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;

    document.getElementById("pName").innerText = name;
    document.getElementById("pPosition").innerText = position;
    document.getElementById("pEmail").innerText = email;
    document.getElementById("pPhone").innerText = phone;
    document.getElementById("pExperience").innerText = experience;

    var skillList = document.getElementById("pSkills");
    skillList.innerHTML = "";

    var skillArray = skills.split(",");

    for (var i = 0; i < skillArray.length; i++) {
        var li = document.createElement("li");
        li.innerText = skillArray[i].trim();
        skillList.appendChild(li);
    }

    document.getElementById("profileSection").style.display = "block";

});