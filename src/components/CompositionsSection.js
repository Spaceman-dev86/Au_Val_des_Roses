import '../styles/Compositions.css'

function CompositionsSection({ items }) {
return (
<section className='avr-section' id='compositions'>
<div className='avr-section-header'>
<h3 className='avr-section-title'>Compositions</h3>
<p className='avr-section-lead'>Bouquets & compositions florales délicates à offrir.</p>
</div>
<div className='avr-compositions-grid'>
{items.map((item) => (
<figure className='avr-composition' key={item.title}>
<img className='avr-composition-image' src={item.src} alt={item.title} />
<figcaption className='avr-composition-caption'>
<div className='avr-composition-title'>{item.title}</div>
<div className='avr-composition-subtitle'>{item.subtitle}</div>
</figcaption>
</figure>
))}
</div>
</section>
)
}

export default CompositionsSection