import './Home.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imgFarma from './assets/farma.png'
import imgVtex from './assets/vtex.png'
import imgBancoppe from './assets/bancoppel.png'

// import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {

  const itemData = [
    {
      img: imgFarma,
      title: 'farma',
      link: 'https://farmadomicilios.epssura.com/login'
    },
    {
      img: imgVtex,
      title: 'vtex',
      link: 'https://vtex.com/co-es/'
    },
    {
      img: imgBancoppe,
      title: 'bancoppel',
      link: 'https://www.bancoppel.com/main/index.html'
    },
    
  ];
   
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
              <Grid container mt={12} ml={{xs:4, md: 4}}>
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
                  <Grid mt={4} xs={6} md={6}>
                  <ImageList sx={{width: 800,height: 300}} cols={3} rowHeight={210} >
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.title}
                              loading="lazy"
                            />

                            <a href={item.link} target="_blank" rel="noreferrer" 
                              style={{  color: "white"}}>
                                {item.link}
                            </a>
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container  ml={{xs:4, md: 4}} mb={12}>
                <Grid item md={12}>
                  <Typography mb={4} variant="h2" color={'#0afdd7'}>
                    Las tecnologias utilizadas en mi experiencia
                  </Typography>

                  <Button mr={4 } variant="outlined" style={{  marginRight: '20px',   border: '1px solid #0afdd7',color: "#0afdd7"}}>
                    React.js
                  </Button>
                  <Button  mr={2} variant="outlined" style={{   marginRight: '20px',  border: '1px solid #0afdd7',color: "#0afdd7"}}>
                    Vue.js
                  </Button>
                  <Button variant="outlined" style={{  marginRight: '20px',   border: '1px solid #0afdd7',color: "#0afdd7"}}>
                    Node.js
                  </Button>
                  <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                   Python
                  </Button>

                </Grid>
              </Grid>
              <Grid className='message' container spacing={2} >
                    <Grid  item  xs={12} md={12} >
                        <Grid item md={12}>
                            <Typography mb={4} variant="h2" color={'#0afdd7'}>
                              Envieme un mensaje
                            </Typography>
                            <Typography variant="body" color={'white'}>
                              ¿Tinenes una pregunta o propuesta, o solo quieres salidar? Adelante
                            </Typography>
                        </Grid >
                        <Grid container  md={12}>
                            <Grid mt={4} xs={6} md={4} item>
                                <TextField
                                    id="outlined-error"
                                    label="Su nombre"
                                    color="success"
                                    // style={{ color: "white"}}
                                />
                            </Grid>
                            <Grid mt={4} md={4} item>
                                <TextField
                                    id="outlined-error-helper-text"
                                    label="Direccion de correo electronico"
                                />
                            </Grid>
                            <Grid mt={4} md={4} item>
                                <TextField
                                    id="outlined-error"
                                    label="Tu mensaje"
                                />
                            </Grid>
                        </Grid>
                        <Grid mt={6} item>
                            <a className="button button3" href='https://farmadomicilios.epssura.com/login' target="_blank" rel="noreferrer">Enviar mensaje</a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Home