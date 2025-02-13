document.addEventListener('DOMContentLoaded', function() {
    var openbutton = document.querySelector('#bars'); // Select the bar icon by ID
    var closebutton = document.querySelector('.fa-circle-xmark'); // Select the close button by class
    var navbar = document.querySelector('.navbar'); // Select the navbar by class

    openbutton.addEventListener('click', function() {
        navbar.style.left = "0"; // Open the navbar
    });

    closebutton.addEventListener('click', function() {
        navbar.style.left = "-100%"; // Close the navbar
    });
});


