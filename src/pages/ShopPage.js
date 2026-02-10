import ShoppingList from '../components/ShoppingList'
import { useNavigate } from 'react-router-dom'

function ShopPage({ cart, updateCart }) {
	const navigate = useNavigate()
	return (
		<div className='avr-page'>
			<section className='avr-section'>
				<div className='avr-section-header'>
					<h2 className='avr-section-title'>Boutique en ligne</h2>
					<p className='avr-section-lead'>
						Ajoutez des articles au panier, puis commandez en quelques clics.
					</p>
				</div>
				<div className='avr-shop-actions'>
					<button
						className='avr-button avr-button-primary'
						type='button'
						onClick={() => navigate('/commande')}
					>
						Voir mon panier
					</button>
				</div>
				<ShoppingList cart={cart} updateCart={updateCart} />
			</section>
		</div>
	)
}

export default ShopPage
