import React from 'react';
import PageBanner from '../components/PageBanner';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormLists from "../components/FormLists";


export default function Dashboard({access_token, tokentimer, urlparameter, forms, accountid, offset, maxReturn, totalforms}){
    return (
        <>
            <main>
                <Header />
                <PageBanner 
                    pageTitle="View Forms" 
                    homePageUrl={"/dashboard?"+urlparameter}
                    homePageText="Dashboard" 
                    tokentimer={tokentimer}
                /> 
                <div className='container'>
                    <div className='row'>
                        <div className='pt-5'>
                            <FormLists forms={forms} urlparameter={urlparameter} accountid={accountid} offset={offset} maxReturn={maxReturn} totalforms={totalforms} />
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
    var offset = query.offset;
    if(!query.offset){
        offset = 0;
    }
    var maxReturn = query.maxReturn;
    if(!query.maxReturn){
        maxReturn = 10;
    }
    
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
        const res2 = await fetch('https://'+accountid+'.mktorest.com/rest/asset/v1/forms.json?access_token='+json.access_token+'&offset='+offset+'&maxReturn='+maxReturn)
        const json2 = await res2.json();
        let totalforms='';
        if(!json.error){
            totalforms = Object.keys(json2.result).length;
        }
        return {
            props: {access_token: json.access_token, tokentimer: json.expires_in, urlparameter: urlparameter, forms: json2.result, accountid: accountid, offset:offset, maxReturn:maxReturn, totalforms:totalforms }
        }
    }
}