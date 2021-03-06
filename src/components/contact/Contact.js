import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ContactForm from './ContactForm'
import EmailIcon from '@material-ui/icons/Email';


export default function Contact(){
  return(
    <React.Fragment>
    {/* to have "contact us" in the center
      <Grid container>
          <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'1.5em'}}>
            <Typography component="h1" variant="h2" style={{ marginBottom: '-0.25em' }}>
            <b>Contact Us</b>
            </Typography>
          </Grid>
      </Grid>
      */}
      <Grid container style={{marginTop: '5em', display: 'flex', justifyContent: 'center'}}>
        <Grid item sm={5} style={{display: 'flex', flexDirection: 'column', padding: '0 4em'}}>
          <Typography component="h1" variant="h2" style={{ marginBottom: '0.5em' }}>
          <b>Contact Us</b>
          </Typography>

            <EmailIcon fontSize="large" style={{marginRight: '10px'}} color="primary"/>
            <Typography variant="h6" color="primary"><i>contact@ourmomentum.org</i></Typography>

            <Typography variant="subtitle1" style={{marginTop: "1em"}}>
              If you have any questions, comments or feedback, please let us know here! Someone from our team will respond as soon as possible!
            </Typography>

            <Typography variant="subtitle2" style={{marginTop: "0.5em", marginBottom:"3em"}}>
              <i>( PS – If you want to tell our team how good looking they are, that’s ok too :) )</i>
            </Typography>

            <Button style={{borderRadius: '10px', backgroundColor:"#c13584", color:"white", marginBottom:'1em'}} fullWidth>
              <Typography variant="subtitle1">Instagram</Typography> <InstagramIcon  fontSize="default" style={{marginLeft: "5px"}}/>
            </Button>

            <Button style={{borderRadius: '10px', backgroundColor:"#1da1f2", color:"white", marginBottom:'1em'}} fullWidth>
              <Typography variant="subtitle1">Twitter</Typography> <TwitterIcon  fontSize="default" style={{marginLeft: "5px"}}/>
            </Button>

            <Button style={{borderRadius: '10px', backgroundColor:"#2867b2", color:"white", marginBottom:'1em'}} fullWidth>
              <Typography variant="subtitle1">LinkedIn</Typography> <LinkedInIcon  fontSize="default" style={{marginLeft: "5px"}}/>
            </Button>
          </Grid>
        <Grid item xs />
        <Grid xs={12} sm={5}>
              <ContactForm />
        </Grid>
        <Grid item xs={1} />

      </Grid>

        </React.Fragment>
      )
}
