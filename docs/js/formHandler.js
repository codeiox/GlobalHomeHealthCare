/* global grecaptcha */


document.getElementById("appointment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const aptValue = document.getElementById("apt").value.trim();
    const apt_number = aptValue === "" ? -1 : parseInt(aptValue);

    const data = {
        full_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        apt_number: apt_number, // Makes apt# assign -1 as sentinel value
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zip").value,
        is_over18: document.getElementById("age").checked,
        description: document.getElementById("message").value,
        //resume_filename: document.getElementById("resume").value
    };

    // check reCAPTCHA token before fetch

    const token = grecaptcha.getResponse();
    if (!token) {
        alert("Please complete the reCAPTCHA.")
        return;
    }
    data.recaptcha_token = token;


    fetch("https://localhost:18080/submit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
        .then(res => res.text())
        .then(msg => {
            document.getElementById("success").innerText = msg;
            setTimeout(() => window.location.reload(), 5000);
        })
        .catch(() => alert("Something went wrong."));
});
