import './Contact.css'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contact = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
    return (
     <>

            <Grid container md={12}>
              <Grid item sx={{xs:12, md:6}} style={{ background: 'gray', width:'50%' }}>
                  <Grid item ml={2}>
                    <Typography variant="h4" color={'#0afdd7'}>
                      Contactame para algun servicio
                    </Typography>
                  </Grid>
                  <Grid item ml={2}>
                    <Typography variant="body" color={'white'}>
                      Estoy interesado en oportunidades independientes, especialmente en proyectos ambiciosos.
                      No obstante, si tines otra peticion o pregunta, no dudes en utilizar el formulario
                    </Typography>
                  </Grid>
                  <Grid container md={12} ml={2} mt={4}>
                    <Grid item md={6}>
                      <TextField
                          id="outlined-error"
                          label="Nombre"
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextField
                            id="outlined-error"
                            label="Correo electronico"
                            
                        />
                    </Grid>
                    <Grid item md={12} mt={{xs:2, md:4}}>
                      <TextField
                            id="outlined-error"
                            label="Sujeto"
                            style={{ width: '87%' }}
                        />
                    </Grid>
                    <Grid item md={12} mt={{xs:2, md:4}}>
                      <TextareaAutosize
                            aria-label="empty textarea"
                            placeholder="Mensaje"
                            style={{ width: '87%' }}
                          />
                    </Grid>
                    <Grid item md={12}>
                      <Grid mt={6} mb={4} item>
                            <Button variant="outlined" style={{     border: '1px solid #0afdd7',color: "#0afdd7"}}>
                              Enviar Mensaje
                            </Button>
                        </Grid>
                    </Grid>
                  </Grid>
              </Grid>
              <Grid item sx={{xs:12, md:6}} style={{ background: 'black', width:'50%' }}>
                          <LoadScript
                    googleMapsApiKey=""
                  >
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    >
                      { /* Child components, such as markers, info windows, etc. */ }
                      <></>
                    </GoogleMap>
                  </LoadScript>
              </Grid>
            </Grid>
          </>
    )
}

export default Contact