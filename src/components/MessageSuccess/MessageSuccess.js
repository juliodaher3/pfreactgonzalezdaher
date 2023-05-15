import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Buena compra, pero todavia te faltan comprar mas para conseguir la corona real chinpoko. Tu numero de transaccion es:{purchaseID}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;