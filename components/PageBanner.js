import React from 'react';
import Link from 'next/link';
import Countdown from 'react-countdown';

const Completionist = () => <span>Your token is expired</span>;
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{minutes} min:{seconds} sec</span>;
  }
};

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, tokentimer}) => {
    return (
        <>
            <div className="page-banner-area">
                <div className="container">
                <div className="row page-banner-content">
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                        <h2>{pageTitle} <span className="toplink"><Link href={homePageUrl}><a>{homePageText}</a></Link></span></h2>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div>Token will expire in <h4><Countdown date={Date.now() + tokentimer*1000} renderer={renderer} /></h4></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PageBanner Style */}
            <style jsx>{`
                .toplink{font-size:15px;}
                .page-banner-area {
                    background-color: #F4F8FC;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    position: relative;
                    z-index: 1;
                }
                
                .page-banner-content.max-width h2 {
                    line-height: 1.5;
                }
                .page-banner-content h2 {
                    font-size: 45px;
                    margin-bottom: 20px;
                    line-height: 1.4;
                }
                .page-banner-content ul {
                    padding-left: 0;
                    margin-bottom: 0;
                }
                .page-banner-content ul li {
                    display: inline-block;
                    list-style-type: none;
                    font-size: 14px;
                    font-weight: 500;
                    color: #79798D;
                    position: relative;
                    margin-left: 28px;
                }
                .page-banner-content ul li::before {
                    content: '';
                    position: absolute;
                    left: -18px;
                    top: 12px;
                    height: 1px;
                    width: 10px;
                    background: var(--paragraph-color);
                }
                .page-banner-content ul li:first-child {
                    margin-left: 0;
                }
                .page-banner-content ul li:first-child::before {
                    display: none;
                }
                .page-banner-content ul li a {
                    display: block;
                    color: var(--main-color);
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .page-banner-area {
                        padding-top: 80px;
                        padding-bottom: 80px;
                    }
                    .page-banner-content h2 {
                        font-size: 30px;
                    }
                    .page-banner-shape-1 {
                        display: none;
                    }
                    .page-banner-shape-2 {
                        display: none;
                    }
                    .page-banner-shape-3 {
                        display: none;
                    }
                    .page-banner-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .page-banner-content h2 {
                        font-size: 30px;
                    }
                    .page-banner-shape-1 {
                        display: none;
                    }
                    .page-banner-shape-2 {
                        display: none;
                    }
                    .page-banner-shape-3 {
                        display: none;
                    }
                    .page-banner-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    );
}

export default PageBanner;