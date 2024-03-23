import React, {useEffect} from 'react'
import { databases } from '../appwriteConfigs/appwriteConfig';
import { useAuth } from '../utils/AuthContext';

const Home = () => {

  const { user } = useAuth();

  useEffect(() => {
    if (user) {

      // Make a request to the Appwrite database
      databases.listDocuments('65f58948b2916c41b502', '65f589674fd0b72535ce')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  return (
  
        <div className="container">
            <h1>Welcome to my website!</h1>

            <p>This page should be protected by a PrivateRoutes component for authenticated users</p>
        </div>

  )
}

export default Home
