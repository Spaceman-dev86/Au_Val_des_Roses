import '../styles/CartDrawer.css'
import { useNavigate } from 'react-router-dom'

function CartDrawer({ open, onClose, cart, updateCart }) {
	const navigate = useNavigate()
	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

	const clearCart = () => updateCart([])

	const setAmount = (name, nextAmount) => {
		updateCart((currentCart) => {
			const itemIndex = currentCart.findIndex((item) => item.name === name)
			if (itemIndex === -1) return currentCart

			if (nextAmount <= 0) {
				return currentCart.filter((_, idx) => idx !== itemIndex)
			}

			return currentCart.map((cartItem, idx) =>
				idx === itemIndex ? { ...cartItem, amount: nextAmount } : cartItem
			)
		})
	}

	const removeOne = (name) => {
		updateCart((currentCart) => {
			const itemIndex = currentCart.findIndex((item) => item.name === name)
			if (itemIndex === -1) return currentCart

			const item = currentCart[itemIndex]
			if (item.amount > 1) {
				return currentCart.map((cartItem, idx) =>
					idx === itemIndex ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem
				)
			}

			return currentCart.filter((_, idx) => idx !== itemIndex)
		})
	}

	if (!open) return null

	return (
		<div className='avr-drawer-overlay' onClick={onClose}>
			<aside className='avr-drawer' onClick={(e) => e.stopPropagation()}>
				<div className='avr-drawer-header'>
					<h3 className='avr-drawer-title'>Votre panier</h3>
					<button className='avr-drawer-close' type='button' onClick={onClose}>
						Fermer
					</button>
				</div>

				{cart.length === 0 ? (
					<div className='avr-drawer-empty'>Votre panier est vide.</div>
				) : (
					<div className='avr-drawer-body'>
						<div className='avr-drawer-list-wrapper'>
							<ul className='avr-drawer-list'>
								{cart.map(({ name, price, amount }) => (
									<li className='avr-drawer-item' key={name}>
										<div className='avr-drawer-item-main'>
											<div className='avr-drawer-item-name'>{name}</div>
											<div className='avr-drawer-item-meta'>
												<div className='avr-drawer-item-meta-row'>
													<span className='avr-drawer-item-meta-text'>
														{price}€ / pièce
													</span>
													<label className='avr-drawer-qty'>
														<span className='avr-drawer-qty-label'>Qté</span>
														<input
															className='avr-drawer-qty-input'
															type='number'
															min='0'
															step='1'
															value={amount}
															onChange={(e) => {
																const parsed = Number.parseInt(e.target.value, 10)
																if (Number.isNaN(parsed)) return
																setAmount(name, parsed)
															}}
														/>
													</label>
												</div>
											</div>
										</div>
										<div className='avr-drawer-item-side'>
											<div className='avr-drawer-item-total'>{amount * price}€</div>
											<button
												className='avr-drawer-item-remove'
												type='button'
												onClick={() => removeOne(name)}
												aria-label={`Retirer 1 ${name} du panier`}
												title='Retirer 1'
											>
												<svg viewBox='0 0 24 24' width='18' height='18' aria-hidden='true'>
													<path
														d='M9 3h6l1 2h4v2H4V5h4l1-2Zm1 7h2v9h-2v-9Zm4 0h2v9h-2v-9ZM7 10h2v9H7v-9Z'
														fill='currentColor'
													/>
												</svg>
											</button>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className='avr-drawer-footer'>
							<div className='avr-drawer-total'>Total : {total}€</div>
							<div className='avr-drawer-actions'>
								<button
									className='avr-button avr-button-secondary'
									type='button'
									onClick={clearCart}
								>
									Vider le panier
								</button>
								<button
									className='avr-button avr-button-primary'
									type='button'
									onClick={() => {
										onClose()
										navigate('/commande')
									}}
								>
									Commander
								</button>
							</div>
						</div>
					</div>
				)}
			</aside>
		</div>
	)
}

export default CartDrawer
