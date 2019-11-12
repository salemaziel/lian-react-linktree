import React from 'react'
import Profilepic from '../assets/images/pinkpants.jpg'
import '../css/header.css'
import Helmet from 'react-helmet'

class Header extends React.Component {
    render() {

        return (
        <>
            <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>LianAriel</title>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZjVkN2M3YzEtOGU0Yy00ZTUzLWFiZGQtNTNkZjY3NGM2YThkNjM3MDg5MjIyODA1Nzg2OTk5" id="snipcart"></script>
              <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
              <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Helmet>
            <div className="userphoto">
                <a href="#">
                <img className="photo" src={Profilepic} alt=""></img></a>
                <h1 className=""> @lianariel</h1>
            </div>
        </>
        )

    }
}

export default Header