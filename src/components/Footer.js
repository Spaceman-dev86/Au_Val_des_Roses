import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Footer.css'

function Footer() {
	return (
		<footer className='avr-footer'>
			<div className='avr-footer-inner'>
				<div className='avr-footer-col avr-footer-col-left'>
					<div className='avr-footer-title'>Au Val des Roses</div>
					<div className='avr-footer-text'>246 Rue Paul Bert, 69003 Lyon</div>
					<a className='avr-footer-link' href='tel:0478544778'>
						04 78 54 47 78
					</a>
				</div>

				<div className='avr-footer-center'>
					<img className='avr-footer-logo' src={logo} alt='Au Val des Roses' />
				</div>

				<div className='avr-footer-col avr-footer-col-right'>
					<NavLink className='avr-footer-title avr-footer-title-link' to='/boutique'>
						Boutique
					</NavLink>
					<NavLink className='avr-footer-link' to='/contact'>
						Contact
					</NavLink>
					<a
						className='avr-footer-link'
						href='https://www.facebook.com/Au-Val-des-Roses-1476588999047527'
						target='_blank'
						rel='noreferrer'
					>
						Facebook
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer