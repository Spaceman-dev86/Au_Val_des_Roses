import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

function Header({ logo, onCartClick, cartCount }) {
	return (
		<header className='avr-header'>
			<div className='avr-header-inner'>
				<NavLink className='avr-brand' to='/'>
					<img className='avr-brand-logo' src={logo} alt='Au Val des Roses' />
					<span className='avr-brand-name'>Au Val des Roses</span>
				</NavLink>

				<nav className='avr-header-nav'>
					<NavLink className='avr-header-link' to='/'>
						Accueil
					</NavLink>
					<NavLink className='avr-header-link' to='/boutique'>
						Boutique
					</NavLink>
					<NavLink className='avr-header-link' to='/contact'>
						Contact
					</NavLink>
				</nav>

				<button className='avr-cart-button' type='button' onClick={onCartClick}>
					Panier
					{cartCount > 0 ? (
						<span className='avr-cart-badge'>{cartCount}</span>
					) : null}
				</button>
			</div>
		</header>
	)
}

export default Header
