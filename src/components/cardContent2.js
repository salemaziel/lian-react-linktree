import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, 
    
  } from 'reactstrap'
import Primario from './primario';
import '../css/cardcontent.css'
import Header from './header';

import '../css/gallery2.css'
import Gallery2 from './gallery2';
import Footer from '../components/footer'



function Cardcontent2() {
    
    return (
        <Card className="card-bg gallery2">
            <Header />
        <CardBody>
        
          <CardTitle>
              <h1 style={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  display: 'relative',
              }}>
                  theGram.online 
                  </h1> 
            </CardTitle>
            <CardSubtitle>Just a test: Subtitle</CardSubtitle>
           
            
          
            <Gallery2 />
              
                
                
                
        </CardBody>
        <Footer />
        </Card>
    )
}

export default Cardcontent2