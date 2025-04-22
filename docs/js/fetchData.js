document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const phone_number = document.getElementById("phone").value.trim();

    const data = {
        full_name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone_number: phone_number,
        message: document.getElementById("message").value.trim()
    };

    const res = await fetch("https://localhost:18080/submit_contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
        .then(res => res.text())
        .then(msg => {
            alert("Your message has been sent!");
            setTimeout(() => window.location.reload(), 2000);
        })
        .catch(() => alert("Something went wrong."));
});
