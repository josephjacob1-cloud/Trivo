const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span>
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <i key={`full-${index}`} className="bi bi-star-fill text-warning"></i>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <i className="bi bi-star-half text-warning"></i>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={`empty-${index}`} className="bi bi-star text-warning"></i>
      ))}
    </span>
  );
};

export default StarRating;