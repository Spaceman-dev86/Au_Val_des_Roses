import '../styles/Hours.css'

function Hours({ hours }) {
	return (
		<section className='avr-section' id='horaires'>
			<div className='avr-section-header'>
				<h3 className='avr-section-title'>Horaires</h3>
				<p className='avr-section-lead'>
					Ouvert du mardi au samedi. Dimanche matin.
				</p>
			</div>
			<div className='avr-hours-grid'>
				{hours.map(({ day, value }) => (
					<div className='avr-card avr-hours-row' key={day}>
						<div className='avr-hours-day'>{day}</div>
						<div className='avr-hours-value'>{value}</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Hours
