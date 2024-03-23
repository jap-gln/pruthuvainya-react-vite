import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65e70564e5ec9cd636f0'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);

export const databases = new Databases(client);

export default client;