import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,  
    
  } from 'reactstrap'

import '../css/cardcontent.css'
import Header from './header';

import '../css/gallery2.css'
import Gallery2sales from './gallery2sales';
import Footer from './footer'



function Cardcontent2sales() {
    
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
           
            
          
            <Gallery2sales />
              
                
                
                
        </CardBody>
        <Footer />
        </Card>
    )
}

export default Cardcontent2sales