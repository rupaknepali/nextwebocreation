
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import {useRouter} from 'next/router';


export default function Home() {
  const router = useRouter();
  const { token } = router.query;
  var loginmessage ="";
  if(token == 'invalidclient'){
    loginmessage ="Wrong credentials or token expired"
  }

  return (
    <> 
      <Header />
      <main>
        <Login loginmessage={loginmessage} />
        <Footer />
      </main>
      
    </>
  );
}
