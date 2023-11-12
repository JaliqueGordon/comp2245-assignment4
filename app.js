document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("SearchButton").addEventListener("click", function() {
        var Userinput = document.getElementById("SearchField").value.trim();
        
        var QueryString = Userinput ? "?query=" + encodeURIComponent(Userinput) : "";

        fetch("http://localhost/comp2245-assignment4/superheroes.php")
        .then(response => {
            if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text(); 
            })
            .then(data => {
                
                displayResult(data);
            })
            .catch(error => {
                
                document.getElementById("result").innerHTML = "Error fetching data";
                console.error('Error fetching data:', error);
            });
    });
});
       

function displayResult(data) {
var resultDiv = document.getElementById("result");


if (Array.isArray(data)) {
    
    resultDiv.innerHTML = formatSuperheroesList(data);
} else if (data && data.alias) {
    
    resultDiv.innerHTML = formatSingleSuperhero(data);
} else {
    
    resultDiv.innerHTML = "Superhero not found";
}
}


function formatSuperheroesList(superheroes) {
let html = "<ul>";
superheroes.forEach(superhero => {
    html += `<li>${superhero.alias}</li>`;
});
html += "</ul>";
return html;
}


function formatSingleSuperhero(superhero) {
return `<div>
            <h3>${superhero.alias}</h3>
            <h4>${superhero.name}</h4>
            <p>${superhero.biography}</p>
        </div>`;
}
