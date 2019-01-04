import React from 'react';

//import { SocialIcon } from 'react-social-icons';

// npm install react-social-icons --save-dev
// https://www.npmjs.com/package/react-social-icons

const Footer = () => {
    return (
        <footer>

            <div className="footerdiv">
			    <input type="text" placeholder="Email Address"/>
			    <button type="submit">Keep in Touch</button>
            </div>
	

		<p className="copyright">&copy;2019 Christina M. Hughes<i class="material-icons">face</i><i class="fab fa-linkedin"></i></p>
	</footer>
    )
}

export default Footer;