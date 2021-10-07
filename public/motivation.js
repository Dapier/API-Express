document
    .querySelector(".request-motivation")
    .addEventListener("click", function () {
        fetch("/motivation")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                document.querySelector(".motivation").innerText = data.motivation;
            })
            .catch(function (err) {
                console.error(err);
            });
    });