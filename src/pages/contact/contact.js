import React from 'react';

const styles = {
	containerContact: {
		padding: 20,
		textAlign: 'center',
	},
};

const Contact = () => {
	return (
		<div style={styles.containerContact}>
			<h1>Contacto</h1>
			<p>
				Estamos trabajando en esto, actualmente no disponemos de servicio de atencion al cliente pero podes acercarte a nuestras oficinas en Tokyo, Japon.
			</p>
		</div>
	);
};

export default Contact;