import { createTheme } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
	palette: {
		initial: "#26262B",
		primary: {
			main: "#5d64d5",
			light: "#FCFDFD",
			lightActive: "#CDCFF2",
			dark: "#464BA0",
			darker: "#21234B",
		},
		secondary: {
			main: "#d9b431",
			light: "#fbf8ea",
		},
		light: {
			main: "#EFF0FB",
		},
		white: {
			main: "#F6F8F9",
			light: "#FCFDFD",
			darker: "#6D6D7C;",
		},
		text: {
			primary: "#595959",
			secondary: "#EFF0FB",
			grey: "#6D6D7C",
			dark: "#26262B",
			black: "#000000",
			white: "#FFFFFF",
			danger: "#FF0000",
		},
		alert: {
			success: "#00BFA6",
			warning: "#FFB300",
			danger: "#FF0000",
			dangerlight: "#FBEAEA",
		},
		urgencias: {
			low: "#6D6D7C",
			normal: "#FFB300",
			high: "#da2a2b",
			urgent: "#FF0000",
		},
	  	fondos: {
			app: "#FFFFFF",
			fondo: "#F2F4F7",
			anuncios: "#FCFDFD",
			canal: "#E7E8F9",
			alternative: "#1E1E1E",
		},
		divider: "#EFF0FB",
	},
	components: {
		MuiButton: {
		  styleOverrides: {
			root: {
			  textTransform: "none",
			  borderRadius: "10px",
			  gap: "10px",
			},
		  },
		},
		MuiDrawer: {
		  styleOverrides: {
			paper: {
			  backgroundColor: "#21234b",
			  color: "#21234B",
			},
		  },
		},
		MuiTab: {
		  styleOverrides: {
			root: {
			  "&.Mui-disabled": {
				opacity: 1,
				color: "#21234B",
			  },
			},
		  },
		},
	},
	typography: {
		fontFamily: ['Noto Sans', 'sans-serif'].join(','),
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		h1: {
			fontSize: "96px",
			fontWeight: 700,
			lineHeight: "155px",
			fontStyle: "normal",
			color: "#2B2B2B",
		},
		h2: {
			fontSize: "64px",
			fontWeight: 400,
			lineHeight: "104px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  h5: {
			fontSize: "24px",
			fontWeight: 400,
			lineHeight: "38px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  h6: {
			fontSize: "18px",
			fontWeight: 700,
			lineHeight: "32px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  caption: {
			fontSize: "12px",
			fontWeight: 400,
			lineHeight: "19.42px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  body1: {
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: "25.89px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  body2: {
			fontSize: "14px",
			fontWeight: 400,
			lineHeight: "22.65px",
			color: "#2B2B2B",
		  },
		  subtitle1: {
			fontSize: "18px",
			fontWeight: 600,
			lineHeight: "29.12px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  subtitle2: {
			fontSize: "14px",
			fontWeight: 700,
			lineHeight: "22.65px",
			fontStyle: "normal",
			color: "#2B2B2B",
		  },
		  overline: {
			fontSize: "10px",
			fontWeight: 600,
			lineHeight: "16.18px",
		  },
	},
	zIndex: {
		snackbar: 1101,
		drawer: 1250,
	},
});

export default theme;
