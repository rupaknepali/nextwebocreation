import React from 'react';
import PageBanner from '../components/PageBanner';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormNavLists from "../components/FormNavLists";
import Head from "next/head";

export default function Dashboard({access_token, tokentimer, urlparameter, totalforms}){
    return (
        <>
            <main>
                <Header />
                <Head>
                <title>
                Dashboard - Marketo Form Administration - Developed by WebOCreation.com
                </title>
                </Head>
                <PageBanner 
                    pageTitle="Dashboard" 
                    homePageUrl="/" 
                    homePageText="Login" 
                    tokentimer={tokentimer}
                /> 
                <div className='container'>
                    <div className='row'>
                        <div className='pt-5'>
                            <FormNavLists urlparameter={urlparameter} totalforms={totalforms} />
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

        const res2 = await fetch('https://'+accountid+'.mktorest.com/rest/asset/v1/forms.json?access_token='+json.access_token+'&maxReturn=200')
        const json2 = await res2.json();
        let totalforms='';
        if(!json.error){
            totalforms = Object.keys(json2.result).length;
        }
        return {
            props: {access_token: json.access_token, tokentimer: json.expires_in, urlparameter: urlparameter, totalforms: totalforms}
        }
    }
}







// class Dashboard extends React.Component {
//     //https://"+event.target.accountid.value+".mktorest.com/identity/oauth/token?client_secret="+event.target.secretkey.value+"&client_id="+event.target.clientid.value+"&grant_type=client_credentials
//     static async getInitialProps ({ query }) {
//         const accountid = query.accountid;
//         const clientid = query.clientid;
//         const secretkey = query.secretkey;
//         const res = await fetch('https://'+accountid+'.mktorest.com/identity/oauth/token?client_secret='+secretkey+'&client_id='+clientid+'&grant_type=client_credentials')
//         const json = await res.json()
//         return { stars: json.access_token }
//     }
//     //console.log(this.props.stars);   
//       render () {
//         return (
//           <>
//             <div>ID: {this.props.stars}</div>
//           </>
//         )
//       }
// }
//export default Dashboard