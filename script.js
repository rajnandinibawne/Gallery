// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons and images
    const buttons = document.querySelectorAll(".container button");
    const images = document.querySelectorAll(".img");

    // Create a mapping of button filters to their specific logic
    const buttonFilters = {
        ShowAll: () => {
            images.forEach((image) => (image.style.display = "block")); // Show all images
        },
        Pune: () => {
            images.forEach((image) => {
                image.style.display = image.classList.contains("Pune") ? "block" : "none";
            });
        },
        Mumbai: () => {
            images.forEach((image) => {
                image.style.display = image.classList.contains("Mumbai") ? "block" : "none";
            });
        },
        Nagpur: () => {
            images.forEach((image) => {
                image.style.display = image.classList.contains("Nagpur") ? "block" : "none";
            });
        },
    };

    // Add click event listeners to each button
    buttons.forEach((button) => {
        const filterName = button.getAttribute("data-name"); // Get the filter name
        button.addEventListener("click", () => {
            // Call the appropriate function for the clicked button
            if (buttonFilters[filterName]) {
                buttonFilters[filterName]();
            }
        });
    });
});