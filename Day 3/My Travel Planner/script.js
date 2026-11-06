function calculateBudget() {

    let destination = document.getElementById("destination").value;

    let days = Number(document.getElementById("days").value);

    let budget = Number(document.getElementById("budget").value);

    let result = document.getElementById("result");

    if (destination === "" || days <= 0 || budget <= 0) {

        result.textContent = "Please enter valid details.";

    } else {

        let total = days * budget;

        result.innerHTML =
            "Your destination: " + destination +
            "<br>Number of days: " + days +
            "<br>Estimated budget: ₹" + total;

    }
}