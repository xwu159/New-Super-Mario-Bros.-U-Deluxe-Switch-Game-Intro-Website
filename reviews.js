// Sample review data
const reviewData = [
    { name: "Shuke Guo", date: "2023-08-06", rating: 5, review: "Amazing game, can't stop playing!" },
    { name: "JJ Lin", date: "2022-08-05", rating: 4, review: "Great platformer with nostalgic vibes." },
    { name: "Charlie Puth", date: "2023-06-03", rating: 3, review: "That is the best game I played. But it is too short" },
    { name: "Tyler Swift", date: "2023-02-02", rating: 2, review: "I love it, but it is so hard" },
    { name: "Jay Chou", date: "2023-01-18", rating: 1, review: "Not fun at all" },
];

// Function to generate review cards
function generateReviewCards() {
    const reviewCards = document.getElementById("review-cards");

    reviewData.forEach(review => {
        const card = document.createElement("div");
        card.classList.add("review-card");

        const ratingStars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

        card.innerHTML = `
            <div class="review-header">
                <h3>${review.name}</h3>
                <p>${review.date}</p>
            </div>
            <div class="review-content">
                <div class="rating">${ratingStars}</div>
                <p>${review.review}</p>
            </div>
        `;

        reviewCards.appendChild(card);
    });
}

// Function to add a new review
function addReview() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const rating = parseInt(document.getElementById("rating").value);
    const review = document.getElementById("review").value;

    if (name && date && rating && review) {
        const newReview = {
            name: name,
            date: date,
            rating: rating,
            review: review
        };

        reviewData.push(newReview);
        document.getElementById("add-review-form").reset();
        document.getElementById("review-cards").innerHTML = ""; // Clear existing cards
        generateReviewCards();
    }
}

// Generate initial review cards when the page loads
document.addEventListener("DOMContentLoaded", () => {
    generateReviewCards();

    const addReviewButton = document.getElementById("add-review-btn");
    addReviewButton.addEventListener("click", addReview);
});
