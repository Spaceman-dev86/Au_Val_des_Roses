import '../styles/Hero.css'
import { Link } from 'react-router-dom'

function Hero({ title, subtitle, image, ctaLabel, ctaHref, ctaTo }) {
	return (
		<section className='avr-hero'>
			<div className='avr-hero-content'>
				<h2 className='avr-hero-title'>{title}</h2>
				<p className='avr-hero-subtitle'>{subtitle}</p>
				{ctaTo ? (
					<Link className='avr-button avr-button-primary' to={ctaTo}>
						{ctaLabel}
					</Link>
				) : (
					<a className='avr-button avr-button-primary' href={ctaHref}>
						{ctaLabel}
					</a>
				)}
			</div>
			<div className='avr-hero-media'>
				<img className='avr-hero-image' src={image} alt='' />
			</div>
		</section>
	)
}

export default Hero
