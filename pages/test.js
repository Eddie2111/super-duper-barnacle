import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
//import stringify from '../middleware/stringify';
import objectify from '../middleware/objectify';

//import { API, graphqlOperation } from 'aws-amplify';
//import { createTodo, createService, updateService, deleteService } from '../src/graphql/mutations';

export default function Home() {
    const submitPhoto = async (event) => {
      event.preventDefault();
      const stringed = objectify(event.target);
      console.log(stringed);
       try {
        //await API.graphql(graphqlOperation(createService, {input: stringed}));
        alert("push complete");
        
       }
        catch (err) {
          console.log(err);
        }

    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Navbar />
  <div className='container'>
    <div className='column'>
        
        </div>
    <div classname='column'>
        <div className='row'>
            <div className='col-md-6'>
                <form onSubmit={submitPhoto}>
                    <div className="mb-3">
                        <label  className="form-label">Upload image:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input type='file'/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
        </div>
    </div>

    </div>
  </div>
  <Footer />
    </div>
  )
}
