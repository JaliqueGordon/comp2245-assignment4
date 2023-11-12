document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("SearchButton").addEventListener("click", function() {
        fetch("http://localhost/comp2245-assignment4/superheroes.php")
        .then(response => response.text())
        .then(data => {

            alert(data);

        });
        
    });
});
