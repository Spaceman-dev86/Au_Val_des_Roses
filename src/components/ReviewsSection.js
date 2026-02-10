import '../styles/Reviews.css'

function ReviewsSection({ reviews }) {
return (
<section className='avr-section' id='avis'>
<div className='avr-section-header'>
<h3 className='avr-section-title'>Avis clients</h3>
<p className='avr-section-lead'>Quelques retours de clients sur la boutique.</p>
</div>
<div className='avr-reviews-grid'>
{reviews.map((review) => (
<article className='avr-card avr-review' key={`${review.author}-${review.meta}`}>
<div className='avr-review-header'>
<div className='avr-review-author'>{review.author}</div>
<div className='avr-review-rating'>{review.rating}/5</div>
</div>
<div className='avr-review-meta'>{review.meta}</div>
<p className='avr-review-text'>{review.text}</p>
</article>
))}
</div>
</section>
)
}

export default ReviewsSection