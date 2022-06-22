import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import awsconfig from '../src/aws-exports';
import {Amplify, API, graphqlOperation } from "aws-amplify";
import awsmobile from "../src/aws-exports";
import {AmplifyAuthenticator, AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
Amplify.configure({...awsmobile,ssr:true});

function MyApp({ Component, pageProps }) {
  return (

    
  <Component {...pageProps} />
    

  );
}

export default withAuthenticator(MyApp);
//export default MyApp;
