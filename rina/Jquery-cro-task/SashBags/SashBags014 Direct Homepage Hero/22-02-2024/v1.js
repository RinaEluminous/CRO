
var reviewDateElements = document.querySelectorAll('.reviews-carousel-card-reviewer-info-container.reviewer-info-site-review .review-date');

reviewDateElements.forEach(function(reviewDateElement) {
    
    var cardContainer = reviewDateElement.closest('.reviews-carousel-card');

    var starRatingContainer = cardContainer.querySelector('.reviews-carousel-card-star-rating-shop-badge-container');
    
    starRatingContainer.appendChild(reviewDateElement);
});
 

// ********************************************************************************

var reviewDateElements = document.querySelectorAll('.reviews-carousel-card-reviewer-info-container.reviewer-info-site-review .review-date');

reviewDateElements.forEach(function(reviewDateElement) {
    
    var cardContainer = reviewDateElement.closest('.reviews-carousel-card');

    var starRatingContainer = cardContainer.querySelector('.reviews-carousel-card-star-rating-shop-badge-container');
    
    starRatingContainer.appendChild(reviewDateElement);
});
 