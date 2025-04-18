

    document.getElementById("appointment-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            full_name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone_number: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            apt_number: parseInt(document.getElementById("apt").value),
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zipcode: document.getElementById("zip").value,
            is_over18: document.getElementById("age").checked,
            description: document.getElementById("message").value,
            //resume_filename: document.getElementById("resume").value
        };



        fetch("https://localhost:18080/submit", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(msg => document.getElementById("success").innerText = msg)
            .catch(() => alert("Something went wrong."));
    });
