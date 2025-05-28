document.addEventListener("DOMContentLoaded", () => {
    console.log("Openotes is now ultimate!");

    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

function filterNotes() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        let subject = note.getAttribute("data-subject").toLowerCase();
        if (subject.includes(input)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
}
