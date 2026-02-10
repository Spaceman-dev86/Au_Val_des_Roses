import '../styles/ShopInfo.css'

function ShopInfo({ address, phone, facebookUrl, rating, reviewCount, services }) {
return (
<section className='avr-section' id='infos'>
<div className='avr-section-header'>
<h3 className='avr-section-title'>Au Val des Roses</h3>
<p className='avr-section-lead'>Fleuriste à Lyon 3e — bouquets, compositions et cadeaux fleuris.</p>
</div>

<div className='avr-info-grid'>
<div className='avr-card'>
<div className='avr-card-title'>Adresse</div>
<div className='avr-card-text'>{address}</div>
</div>

<div className='avr-card'>
<div className='avr-card-title'>Téléphone</div>
<a className='avr-link' href={`tel:${phone.replace(/\s/g, '')}`}>
{phone}
</a>
</div>

<div className='avr-card'>
<div className='avr-card-title'>Avis Google</div>
<div className='avr-card-text'>{rating}/5 ({reviewCount} avis)</div>
</div>

<div className='avr-card'>
<div className='avr-card-title'>Réseaux</div>
<a className='avr-link' href={facebookUrl} target='_blank' rel='noreferrer'>
Facebook
</a>
</div>
</div>

<div className='avr-services'>
<div className='avr-services-title'>Services</div>
<ul className='avr-services-list'>
{services.map((s) => (
<li className='avr-services-item' key={s}>{s}</li>
))}
</ul>
</div>
</section>
)
}

export default ShopInfo