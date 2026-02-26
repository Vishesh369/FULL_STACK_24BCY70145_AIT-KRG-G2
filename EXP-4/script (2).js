document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("jobForm");
    const jobContainer = document.getElementById("jobContainer");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("jobTitle").value;
        const company = document.getElementById("companyName").value;
        const location = document.getElementById("location").value;
        const salary = document.getElementById("salary").value || "Not Specified";
        const description = document.getElementById("description").value;

        const card = document.createElement("div");
        card.classList.add("job-card");

        card.innerHTML = `
            <div class="job-header">
                <div class="job-title">${title}</div>
                <div class="salary">${salary}</div>
            </div>
            <div class="company">${company}</div>
            <div class="location">📍 ${location}</div>
            <div class="description">${description}</div>
            <button class="delete-btn">Remove</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", function () {
            card.remove();
        });

        jobContainer.appendChild(card);
        form.reset();
    });

});