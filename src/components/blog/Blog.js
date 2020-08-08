import React from 'react';
import MomentumFooter from '../footer/MomentumFooter';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import BlogPost from './BlogPost'
import brightSide from './images/bright_side.jpg'
import recipe2 from './images/recipes_2.png'
import nostalgia from './images/nostalgia.png'
import sonder from './images/sonder.jpg'
import recipe1 from './images/recipes_1.png'
import fledging from './images/fledging.jpg'
import clearSkies from './images/clear_skies.png'
import economy from './images/money.jpg'


export default function Blog(){
    const margin = {
      // display: 'flex',
      // justifyContent: 'center',
      // flexDirection: 'column',
      margin: '120px'
    };

    const imgSize = {
      width: '40vw',
      display: 'flex',
      justifyContent: 'center',
      margin: '30px'
    }

    return(

      <Grid>

        <center>
          <Typography variant="h1" style={{fontWeight:'bold', textAlign: 'center', fontSize: '6vw', marginTop: '5vw'}}> Blog </Typography>
          <center><Typography variant="p" style={{fontStyle: "oblique", textAlign: 'center', fontSize: '2vw', marginBottom: '50px'}}> Catch up on the latest Momentum stories and pieces here. </Typography></center>

          <div style={{margin, marginTop: '0'}}>
            <BlogPost title="3 Recipes from My Mom to You: Part 2" date="August 7, 2020" writers="Seungbin Kang. Edited by Tanae Rao and Jordanne Stewart" artists="Blossom Neo" img="recipe2"/>
          </div>

          <div style={margin}>
            <BlogPost title="Anthology of Discovered Nostalgia" date="July 31, 2020" writers="Natalie Chen. Edited by Rachelle Kasilag and Isabella Romine" artists="Özge Ahretlikoglu" link="https://google.com"/>
            <img src={nostalgia} style={imgSize} alt="brightSide" />
          </div>

          <div style={margin}>
            <BlogPost title="On the Bright Side" date="July 24, 2020" writers="Atrayee Dutt. Edited by Eden Gringart and Jordanne Stewart" artists="Thanh Le"/>
            <img src={brightSide} style={imgSize} alt="brightSide" />
          </div>

          <div style={margin}>
            <BlogPost title="Sonder" date="July 17, 2020" writers="Anusha Riaz. Edited by Amelia Zawadzka and Marc Scocca" artists="Ava Davis"/>
            <img src={sonder} style={imgSize} alt="brightSide" />
          </div>

          <div style={margin}>
            <BlogPost title="3 Recipes from My Mom to You: Part 1" date="July 10, 2020" writers="Seungbin Kang. Edited by Tanae Rao and Jordanne Stewart" artists="Alice Schroeder"/>
            <img src={recipe1} style={imgSize} alt="brightSide"/>
          </div>

          <div style={margin}>
            <BlogPost title="Fledging" date="July 3, 2020" writers="Farida Amr. Edited by Rachelle Kasilag and Isabella Romine" artists="Cai Xia Lee"/>
            <img src={fledging} style={imgSize} alt="brightSide" />
          </div>

          <div style={margin}>
            <BlogPost title="Clear Skies" date="June 26, 2020" writers="Aniket Duggal. Edited by Eden Gringart and Amelia Zawadzka" artists="Rochelle Yuan"/>
            <img src={clearSkies} style={imgSize} alt="brightSide" />
          </div>

          <div style={margin}>
            <BlogPost title="The Economy Isn’t Just About Supply and Demand – It’s About Confidence, Too" date="June 19, 2020" writers="Elyse Barg. Edited by Chaya Kimbell and Tanae Rao" artists="Alice Schroeder"/>
            <img src={economy} style={imgSize} alt="brightSide" />
          </div>

        </center>
      </Grid>



      // <MomentumFooter />;
    );
}
