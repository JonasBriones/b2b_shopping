import Box from '@mui/material/Box';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<React.Fragment>
		<div
            style={{
                backgroundImage: `url('/images/bg-login.png')`,
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
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
}
