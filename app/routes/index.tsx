import React, { useState } from 'react';

import { json } from '@remix-run/node';
import { Form, Link as LinkRoute, useLoaderData } from '@remix-run/react';
import * as yup from 'yup';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import StartOutlined from '@mui/icons-material/StartOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';

import LoadingButton from '@mui/lab/LoadingButton';
import Layout from '../src/components/ui/layouts/layout';

export async function loader() {
	return json({ urlApiBackend: process.env.VITE_API_BACKEND_SHOPPING });
}

const Index: React.FC = () => {
	const data = useLoaderData<typeof loader>();
	const [isSubmitting] = useState(false);
	const [passType, setpassType] = useState('password');

	const validationSchema = yup.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	});

	console.log(validationSchema);

	const toogleViewPassword = () => {
		if (passType === 'password') {
			setpassType('text');
		} else {
			setpassType('password');
		}
	};

	return (
		<Layout>
			<Form>
				<Box component="div" sx={{ maxWidth: 450, p: 3 }}>
					<Typography color="text.secondary" variant="h3" mb={1}>
						Bienvenido
					</Typography>
					<Typography color="text.secondary" variant="h5" mb={4}>
						Ingresa tus credenciales{' '}
					</Typography>

					{/* EMAIL */}
					<InputLabel color="secondary" htmlFor="username">
						<Typography variant="caption" color="text.secondary">
							Correo electrónico
						</Typography>
					</InputLabel>

					<FormControl required fullWidth sx={{ pb: 2 }}>
						<TextField
							inputProps={{ tabIndex: 0 }}
							fullWidth
							autoComplete="off"
							placeholder="Correo electrónico"
							name="email"
							type="email"
							size="small"
							onKeyDown={(ev) => {
								if (ev.key === 'Tab') {
									// passRef.current.focus()
								}
							}}
						/>
					</FormControl>

					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box>
							<InputLabel color="secondary" htmlFor="contraseña">
								<Typography variant="caption" color="text.secondary">
									Contraseña
								</Typography>
							</InputLabel>
						</Box>
						<Box>
							<InputLabel color="secondary" htmlFor="forgot">
								<Link
									tabIndex={-1}
									component={LinkRoute}
									to="/auth/recuperar_password"
									variant="caption"
									color="text.secondary"
								>
									Olvidé mi contraseña
								</Link>
							</InputLabel>
						</Box>
					</Box>
					<FormControl required fullWidth sx={{ mb: 3 }}>
						<OutlinedInput
							placeholder="Contraseña"
							autoComplete="current-password"
							name="password"
							type={passType}
							size="small"
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										onClick={toogleViewPassword}
										tabIndex={-1}
									>
										{passType === 'password' ? (
											<VisibilityOffOutlined />
										) : (
											<VisibilityOutlined />
										)}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>

					<LoadingButton
						fullWidth
						type="submit"
						color="primary"
						size="small"
						sx={{
							mb: 3,
							fontSize: 16,
							'&.MuiLoadingButton-root.Mui-disabled': {
								color: 'rgba(239, 240, 251, 0.5)',
							},
						}}
						variant="contained"
						loading={isSubmitting}
						startIcon={<StartOutlined />}
						loadingPosition="start"
					>
						{isSubmitting ? 'Enviando...' : 'Ingresar'}
					</LoadingButton>

					<Divider sx={{ mb: 3, mt: 4 }}>
						<Typography color="text.secondary">O inicia con</Typography>
					</Divider>

					<Button
						href={`${data.urlApiBackend}/oauth2/authorization/cencosud`}
						fullWidth
						variant="outlined"
						type="button"
						sx={{ fontSize: 16 }}
						color="light"
					>
						Shopping Cencosud
					</Button>

					<LinkRoute to="/privado/externo/local"> test </LinkRoute>
				</Box>
			</Form>
		</Layout>
	);
};

export default Index;
