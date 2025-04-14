document.getElementById("appointment-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("name", document.getElementById("name").value);
    data.append("email", document.getElementById("email").value);
    data.append("date", document.getElementById("date").value);
    data.append("time", document.getElementById("time").value);
    data.append("description", document.getElementById("message").value);

    fetch("/book", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
    })
        .then(res => res.text())
        .then(msg => document.getElementById("success").innerText = msg)
        .catch(() => alert("Something went wrong."));
});