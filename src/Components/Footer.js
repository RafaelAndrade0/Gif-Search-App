import React from 'react';
import Chip from '@material-ui/core/Chip';
import '../styles/footer.css';

const Footer = () => (
    <div>
        <footer className="footerStyle">
            <Chip
                label="Mensagem malandra fixada! ;)" 
            />
        </footer>
    </div>
);

export default Footer;