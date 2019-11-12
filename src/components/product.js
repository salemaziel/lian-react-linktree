import React from 'react'
import Pic1 from '../assets/images/rbowpipe-796x531.png'
import '../css/gallery2.css'
                                   

class Product extends React.Component {
    render() {
        return (  
           <>            
            <a href="#">						
				<span class="image fit">
					<img src={Pic1} alt="" button
                    		                className='snipcart-add-item buyBtn'
                    						data-item-id="1"
                    						data-item-price="25"
                    						data-item-image={Pic1}
                    						data-item-name= "Rainbow Pipe"
                    						data-item-description= "Midsized Handheld spoon pipe with rainbow speckled handle and black-as-night bowl"
                    						data-item-url={"http://snipcart-gatsby.netlify.com"}>
				    </img>
													
				</span>
			</a>
           </> 
        )
    }
}

export default Product
