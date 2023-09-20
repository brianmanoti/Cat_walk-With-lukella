let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu")
}
// Get all menu items with dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Add a mouseover event listener to each dropdown menu
dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdownMenu.style.display = 'none';
    });
});
