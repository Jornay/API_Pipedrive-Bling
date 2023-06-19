const dotenv = require('dotenv');
dotenv.config()

const pipedrive_api_url =  `https://${process.env.PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v1`;
export {pipedrive_api_url}