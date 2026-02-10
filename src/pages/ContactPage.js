import { useState } from 'react'
import '../styles/Contact.css'

function ContactPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		alert('Merci ! Nous revenons vers vous très vite.')
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<div className='avr-page'>
			<section className='avr-section'>
				<div className='avr-section-header'>
					<h2 className='avr-section-title'>Contact</h2>
					<p className='avr-section-lead'>
						Une question ? Un mariage ? Une livraison ? Écrivez-nous.
					</p>
				</div>

				<div className='avr-contact-grid'>
					<div className='avr-card'>
						<div className='avr-card-title'>Coordonnées</div>
						<div className='avr-card-text'>246 Rue Paul Bert, 69003 Lyon</div>
						<div className='avr-contact-row'>
							<a className='avr-link' href='tel:0478544778'>04 78 54 47 78</a>
						</div>
						<div className='avr-contact-row'>
							<a
								className='avr-link'
								href='https://www.facebook.com/Au-Val-des-Roses-1476588999047527'
								target='_blank'
								rel='noreferrer'
							>
								Facebook
							</a>
						</div>
						<div className='avr-contact-row'>
							<a
								className='avr-link'
								href='https://www.google.com/maps/search/?api=1&query=246%20Rue%20Paul%20Bert%2C%2069003%20Lyon'
								target='_blank'
								rel='noreferrer'
							>
								Itinéraire Google Maps
							</a>
						</div>
					</div>

					<form className='avr-card avr-contact-form' onSubmit={handleSubmit}>
						<div className='avr-card-title'>Formulaire</div>
						<label className='avr-field'>
							<span className='avr-field-label'>Nom</span>
							<input
								className='avr-input'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</label>
						<label className='avr-field'>
							<span className='avr-field-label'>Email</span>
							<input
								className='avr-input'
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</label>
						<label className='avr-field'>
							<span className='avr-field-label'>Message</span>
							<textarea
								className='avr-input avr-textarea'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</label>
						<button className='avr-button avr-button-primary' type='submit'>
							Envoyer
						</button>
					</form>
				</div>
			</section>
		</div>
	)
}

export default ContactPage
