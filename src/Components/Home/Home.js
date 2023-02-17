import './Home.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
   
    return (
        <>
        <Box sx={{ flexGrow: 1 }} style={{ background: '#1d1d1d' }}>
            <Grid container >
              <Grid item mt={{xs:4, md:4}}  mx={{xs:4}}  xs={12} md={6}>
                  <Typography variant="h4"  color={'white'}>
                    Hola, Mi nombre es David Prado, y soy un desarrollador full-stack
                  </Typography>
              </Grid>
              <Grid item  mt={{xs:4, md:4}}  mx={{xs:4}}  md={8}>
                  <Typography variant="body" color={'white'}>
                    Tecnologias para el Front: React.js, Vue.js.
                  </Typography>
              </Grid>
              <Grid item mt={{xs:4, md:4}}  mx={{xs:4}} ml={{xs:6, md:4}} md={8}>
                  <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                    Contactame!
                  </Button>
              </Grid>
              <Grid container mt={12} ml={{xs:4, md: 4}} mb={12}>
                <Grid item md={12}>
                  <Typography variant="h2" color={'#0afdd7'}>
                    Mi portafolio
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid md={12} mr={{xs:3}}>
                    <Typography variant="body" color={'white'}>
                      A continuacion les dejare un link donde podran visualizar algunos de mis trabajos realizados en la 
                      parte del frontend.
                    </Typography>
                  </Grid>
                  <Grid mt={4} md={12}>
                    <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                      Ver los proyectos
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Home