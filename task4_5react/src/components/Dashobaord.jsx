import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { addweather, getFiveCities } from '../Redux/Reducer'


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Pak Weather Monitoring App
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Dashobaord() {
    const _id = useSelector(state => state.user.loginData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFiveCities())
    }, [])

    const fiveCitiesData = useSelector(state => state.user.fiveCitiesweatherData)
    const citiesAddedUser = useSelector(state => state.user.citiesAddedUser)
    const [weatherData, setweatherData] = useState({
        cities: "",
        temperatureUnit: "",
        _id: _id
    });

    const Setting = (event) => {
        const { name, value } = event.target
        setweatherData((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        dispatch(addweather(weatherData))
        console.log(citiesAddedUser)
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <ThunderstormIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Pak Weather Monitoring App
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <TextField
                                    required
                                    helperText="City name is required"
                                    fullWidth
                                    name="cities"
                                    label="City Name"
                                    type="text"
                                    id="cityName"
                                    autoComplete="new-password"
                                    onChange={Setting}
                                    value={weatherData.cities}
                                    sx={{ mb: 2 }}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Temperature Unit</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        required
                                        helperText="Temperature Unit is required"
                                        name="temperatureUnit"
                                        type="text"
                                        id="temperatureUnit"
                                        value={weatherData.temperatureUnit}
                                        label="Age"
                                        onChange={Setting}
                                    >
                                        <MenuItem value="imperial">Farenheit</MenuItem>
                                        <MenuItem value="metric">Celsuis</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Add City
                                </Button>
                            </Box>
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                <h1 style={{textAlign:"center"}}>Default Cities Data</h1>
                    <Grid container spacing={4}>
                        {fiveCitiesData.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/weather"
                                        alt="weather"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography>
                                            City Name:{card.city_name}
                                            <br />
                                            Temperature:{card.temperature}
                                            <br />
                                            feels_like:{card.feels_like}
                                            <br />
                                            Humidity:{card.humidity}
                                            <br />
                                            pressure:{card.pressure}
                                            <br />
                                            Sunrise:{card.sunrise}
                                            <br />
                                            Sunset:{card.sunset}
                                            <br />

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* Cities Added By user */}
                <Container sx={{ py: 8 }} maxWidth="md">
                <h1 style={{textAlign:"center"}}>Cities Added By user</h1>
                    <Grid container spacing={4}>
                        {citiesAddedUser.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/weather"
                                        alt="weather"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography>
                                            City Name:{card.city_name}
                                            <br />
                                            Temperature:{card.temperature}
                                            <br />
                                            feels_like:{card.feels_like}
                                            <br />
                                            Humidity:{card.humidity}
                                            <br />
                                            pressure:{card.pressure}
                                            <br />
                                            Sunrise:{card.sunrise}
                                            <br />
                                            Sunset:{card.sunset}
                                            <br />

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}




{/* {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography>
                                        City Name:
                                        Temperature:
                                        Humidity:
                                        sunrise:
                                        Sunset:
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                        <Button size="small">Delete</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))} */}