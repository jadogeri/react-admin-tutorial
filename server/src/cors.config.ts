import { CorsOptions } from 'cors';

export const corsOptionsConfig = (url? :string): CorsOptions => {
  // Add a list of allowed origins (e.g., your frontend application's URL)
  const reactAppBaseUrl = url? url : 'http://localhost:3000';
  const allowedOrigins = [reactAppBaseUrl, 'https://www.yourapp.com', '*'];
  const corsOptions: CorsOptions = {
    origin: allowedOrigins, // The origin option can also be a function for dynamic origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    credentials: true, // Set to true if you need to include cookies in CORS requests
    exposedHeaders: ['Content-Range', 'X-Total-Count'], // Required for React-admin pagination
    allowedHeaders: ['Content-Type', 'Authorization','*'], // Specify allowed headers
    optionsSuccessStatus: 200,
  }
  return corsOptions;
}