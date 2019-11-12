import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,  
    
  } from 'reactstrap'
import Primario from './primario';
import './primario/index.css'
import '../app.css'
import '../css/cardcontent.css'
import Header from './header';
import Footer from './footer';

import Button from '../components/button' 


function cardContent() {
    
    const categoria = ['Primeiro', 'Segundo', 'Terceiro'];
    const subcategorias = [
        [
            {
                name : 'Primeiro.primeiro',
                url : 'Primeiro.primeiro'
            },
            {
                name : 'Primeiro.segundo',
                url : 'Primeiro.segundo'
            }
        ],
        [
            {
                name : 'Segundo.primeiro',
                url : 'Segundo.primeiro'
            },
            {
                name : 'Segundo.segundo',
                url : 'Segundo.segundo'
            }
        ],
        [
            {
                name : 'Terceiro.primeiro',
                url : 'Terceiro.primeiro'
            },
            {
                name : 'Terceiro.segundo',
                url : 'Terceiro.segundo'
            }
        ]
    ];

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
            <CardText>
                <div style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
                <Button primary href="#" prefetch>Music </Button>
                <Button primary href="#" prefetch>Shop </Button>
                <Button primary href="#" prefetch>Photo Gallery </Button>
                <Button primary href="#" prefetch>Website </Button>
                
                    {/**<div className='items'>
                        <div className='items-head'>
                            <h3>Linktree Dashboard</h3>
                            <hr/>
                        </div>
                            {categoria.map( (x, y) => {
                              return <Primario Cat={x} Sub={subcategorias[y]} key={x} />;
                                })}
                            </div>**/}
                Some quick example text blah blah blah
                </div>
                </CardText>
  
                
        </CardBody>
        <Footer />
        </Card>
    )
}

export default cardContent