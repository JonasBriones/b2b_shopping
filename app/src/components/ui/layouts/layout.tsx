import { Box } from '@mui/material';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<React.Fragment>
			<div>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					minHeight="100vh"
				>
					{children}
				</Box>
			</div>
		</React.Fragment>
	);
};

export default Layout;
