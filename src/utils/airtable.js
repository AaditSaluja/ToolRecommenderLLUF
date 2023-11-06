// const Airtable = require("airtable");

// // Authenticate
// Airtable.configure({
//   apiKey: process.env.AIRTABLE_API_KEY,
// });

// // Initialize a base
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// // Reference a table
// const table = base(process.env.AIRTABLE_TABLE_NAME);

// export { table };

// const Airtable = require("airtable");

// // Authenticate using a Personal Access Token
// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: process.env.AIRTABLE_API_KEY,
//   apiVersion: '0.1.0', // Specify the API version
//   personal: true, // Use a Personal Access Token
// });

// // Initialize a base
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// // Reference a table
// const table = base(process.env.AIRTABLE_TABLE_NAME);

// export { table };

import axios from 'axios';

const AIRTABLE_ENDPOINT = `https://api.airtable.com/v0/appy9Vw7YxzjU342N/'BinaryTest'`;

axios.get(AIRTABLE_ENDPOINT, {
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_ACCESS_TOKEN}`,
  }
})