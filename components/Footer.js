import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className="container p-5 d-flex justify-content-center">
                    <div className="row">
                     <span>
                        &copy; {currentYear} Developed by{' '}
                           <a
                            href="https://webocreation.com/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            > Webocreation.com</a>
                        </span>
                    
                </div></div>
            </footer>
        </>
    );
}

export default Footer;