document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById("countrySelect");
    const countryRecommendations = document.getElementById("countryRecommendations");

    const recommendations = {
        japan: [
            { img: "japan1.jpg", text: "Mount Fuji, Japan - Stunning views and cultural heritage." },
            { img: "japan2.jpg", text: "Kyoto, Japan - Traditional temples and cherry blossoms." }
        ],
        france: [
            { img: "france1.jpg", text: "Eiffel Tower, France - Iconic landmark with stunning views." },
            { img: "france2.jpg", text: "Louvre Museum, France - Home to the Mona Lisa and other masterpieces." }
        ]
    };

    function updateRecommendations() {
        const selectedCountry = countrySelect.value;
        countryRecommendations.innerHTML = "";
        recommendations[selectedCountry].forEach(place => {
            const div = document.createElement("div");
            div.classList.add("recommendation");
            div.innerHTML = `<img src="${place.img}" alt="${place.text}"><p>${place.text}</p>`;
            countryRecommendations.appendChild(div);
        });
    }

    countrySelect.addEventListener("change", updateRecommendations);
    updateRecommendations(); // Load initial recommendations
});
