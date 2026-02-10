import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Checkout.css'

function CheckoutPage({ cart, updateCart }) {
	const navigate = useNavigate()
	const total = useMemo(
		() => cart.reduce((acc, item) => acc + item.amount * item.price, 0),
		[cart]
	)

	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('Lyon')
	const [zip, setZip] = useState('')
	const [note, setNote] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		alert('Paiement validé (démo). Merci pour votre commande !')
		updateCart([])
		navigate('/')
	}

	if (cart.length === 0) {
		return (
			<div className='avr-page'>
				<section className='avr-section'>
					<div className='avr-section-header'>
						<h2 className='avr-section-title'>Commande</h2>
						<p className='avr-section-lead'>Votre panier est vide.</p>
					</div>
					<button className='avr-button avr-button-primary' onClick={() => navigate('/boutique')}>
						Aller à la boutique
					</button>
				</section>
			</div>
		)
	}

	return (
		<div className='avr-page'>
			<section className='avr-section'>
				<div className='avr-section-header'>
					<h2 className='avr-section-title'>Paiement & livraison</h2>
					<p className='avr-section-lead'>
						Page cachée (démo). Renseignez vos informations pour finaliser la commande.
					</p>
				</div>

				<div className='avr-checkout-grid'>
					<div className='avr-card'>
						<div className='avr-card-title'>Récapitulatif</div>
						<ul className='avr-checkout-list'>
							{cart.map(({ name, amount, price }, idx) => (
								<li className='avr-checkout-item' key={`${name}-${idx}`}>
									<span className='avr-checkout-item-name'>{name}</span>
									<span className='avr-checkout-item-meta'>
										{amount} × {price}€
									</span>
									<span className='avr-checkout-item-total'>{amount * price}€</span>
								</li>
							))}
						</ul>
						<div className='avr-checkout-total'>Total : {total}€</div>
					</div>

					<form className='avr-card avr-checkout-form' onSubmit={handleSubmit}>
						<div className='avr-card-title'>Informations de livraison</div>

						<label className='avr-field'>
							<span className='avr-field-label'>Nom complet</span>
							<input className='avr-input' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
						</label>

						<label className='avr-field'>
							<span className='avr-field-label'>Email</span>
							<input className='avr-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
						</label>

						<label className='avr-field'>
							<span className='avr-field-label'>Téléphone</span>
							<input className='avr-input' value={phone} onChange={(e) => setPhone(e.target.value)} required />
						</label>

						<label className='avr-field'>
							<span className='avr-field-label'>Adresse</span>
							<input className='avr-input' value={address} onChange={(e) => setAddress(e.target.value)} required />
						</label>

						<div className='avr-checkout-row'>
							<label className='avr-field'>
								<span className='avr-field-label'>Code postal</span>
								<input className='avr-input' value={zip} onChange={(e) => setZip(e.target.value)} required />
							</label>
							<label className='avr-field'>
								<span className='avr-field-label'>Ville</span>
								<input className='avr-input' value={city} onChange={(e) => setCity(e.target.value)} required />
							</label>
						</div>

						<label className='avr-field'>
							<span className='avr-field-label'>Note (optionnel)</span>
							<textarea className='avr-input avr-textarea' value={note} onChange={(e) => setNote(e.target.value)} />
						</label>

						<div className='avr-checkout-pay'>
							<div className='avr-checkout-pay-title'>Paiement (démo)</div>
							<div className='avr-checkout-pay-text'>
								Ici tu pourrais brancher Stripe plus tard. Pour l’instant, c’est une validation simulée.
							</div>
						</div>

						<button className='avr-button avr-button-primary' type='submit'>
							Payer {total}€
						</button>
					</form>
				</div>
			</section>
		</div>
	)
}

export default CheckoutPage
