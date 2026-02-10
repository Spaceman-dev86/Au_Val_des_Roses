import Hero from '../components/Hero'
import ShopInfo from '../components/ShopInfo'
import Hours from '../components/Hours'
import ReviewsSection from '../components/ReviewsSection'
import CompositionsSection from '../components/CompositionsSection'

import vitrine from '../assets/vitrine.jpg'
import dame from '../assets/dame.avif'
import bouquetBlanc from '../assets/composition/blanc.jpg'
import bouquetMix from '../assets/composition/bouquet.jpg'
import bouquetGrand from '../assets/composition/grand.jpg'
import bouquetRose from '../assets/composition/rose.jpg'

function HomePage() {
	const shop = {
		address: '246 Rue Paul Bert, 69003 Lyon',
		phone: '04 78 54 47 78',
		facebookUrl: 'https://www.facebook.com/Au-Val-des-Roses-1476588999047527',
		rating: '3,6',
		reviewCount: '91',
		services: ['Livraison', 'Retrait en magasin', 'Achats en magasin', 'Vente en ligne']
	}

	const hours = [
		{ day: 'Lundi', value: 'Fermé' },
		{ day: 'Mardi', value: '08:00–19:00' },
		{ day: 'Mercredi', value: '08:00–19:00' },
		{ day: 'Jeudi', value: '08:00–19:00' },
		{ day: 'Vendredi', value: '08:00–19:00' },
		{ day: 'Samedi', value: '08:00–19:00' },
		{ day: 'Dimanche', value: '08:00–12:00' }
	]

	const reviews = [
		{
			author: 'Elisabeth SERRE',
			rating: 5,
			meta: 'Local Guide · 19 avis · Visité en octobre 2025',
			text:
				"Merci aux deux fleuristes pour le beau bouquet et la belle composition de table qui ont contribué à rendre parfait mon mariage"
		},
		{
			author: 'Sonia mouna',
			rating: 5,
			meta: 'Local Guide · 59 avis',
			text:
				"Je mets rarement toutes les étoiles mais les fleurs et les compositions et les prix sont très accessibles et de bonne qualité. Les bouquets durent plus d’une semaine... Je recommande sans hésiter !"
		},
		{
			author: 'Имя Фамилия',
			rating: 5,
			meta: 'Local Guide · 50 avis',
			text:
				'I find this place delightful—no unpleasant staff, no negativity. Everything was perfect'
		}
	]

	const compositions = [
		{ src: bouquetMix, title: 'Bouquet signature', subtitle: 'Couleurs de saison' },
		{ src: bouquetRose, title: 'Bouquet rose', subtitle: 'Tons délicats' },
		{ src: bouquetBlanc, title: 'Composition blanche', subtitle: 'Élégante et lumineuse' },
		{ src: bouquetGrand, title: 'Grand bouquet', subtitle: 'Pour les grandes occasions' }
	]

	return (
		<div>
			<Hero
				title='Fleuriste à Lyon 3e'
				subtitle='Bouquets sur-mesure, compositions de saison, livraison et retrait en boutique. Commandez en ligne et récupérez en magasin.'
				image={vitrine}
				ctaLabel='Voir la boutique'
				ctaTo='/boutique'
			/>

			<div className='avr-page'>
				<ShopInfo
					address={shop.address}
					phone={shop.phone}
					facebookUrl={shop.facebookUrl}
					rating={shop.rating}
					reviewCount={shop.reviewCount}
					services={shop.services}
				/>

				<Hours hours={hours} />

				<section className='avr-section' id='atelier'>
					<div className='avr-section-header'>
						<h3 className='avr-section-title'>Notre atelier</h3>
						<p className='avr-section-lead'>
							Des conseils, de la fraîcheur et des compositions qui durent.
						</p>
					</div>
					<div className='avr-split'>
						<img className='avr-split-image' src={dame} alt='' />
						<div className='avr-split-content'>
							<div className='avr-card'>
								<div className='avr-card-title'>Un service humain</div>
								<div className='avr-card-text'>
									Une boutique de quartier, loin des grandes chaînes, avec des fleurs
									soigneusement sélectionnées.
								</div>
							</div>
							<div className='avr-card'>
								<div className='avr-card-title'>Mariage & événements</div>
								<div className='avr-card-text'>
									Bouquets de mariée, compositions de table, décorations sur-mesure.
								</div>
							</div>
						</div>
					</div>
				</section>

				<ReviewsSection reviews={reviews} />

				<CompositionsSection items={compositions} />
			</div>
		</div>
	)
}

export default HomePage
