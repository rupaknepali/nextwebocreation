import React from 'react';
import PageBanner from '../components/PageBanner';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormLists from "../components/FormNavLists";



export default function Dashboard({access_token, tokentimer, urlparameter}){
    return (
        <>
            <main>
                <Header />
                <PageBanner 
                    pageTitle="Add Form Field" 
                    homePageUrl={"/dashboard?"+urlparameter}
                    homePageText="Dashboard" 
                    tokentimer={tokentimer}
                /> 
                <div className='container'>
                    <div className='row'>
                        <div className='pt-5'>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
      )
}

export async function getServerSideProps({ query }) {
    const accountid = query.accountid;
    const clientid = query.clientid;
    const secretkey = query.secretkey;
    const urlparameter = 'accountid='+accountid+'&secretkey='+secretkey+'&clientid='+clientid+'&grant_type=client_credentials';
    const res = await fetch('https://'+accountid+'.mktorest.com/identity/oauth/token?client_secret='+secretkey+'&client_id='+clientid+'&grant_type=client_credentials')
    const json = await res.json();
    if(json.error == 'invalid_client' ){
        return {
            redirect: {
              destination: '/?token=invalidclient',
              permanent: false,
            },
          }
    }else{
        return {
            props: {access_token: json.access_token, tokentimer: json.expires_in, urlparameter: urlparameter  }
        }
    }
}