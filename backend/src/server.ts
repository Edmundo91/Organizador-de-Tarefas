import Fastify from 'fastify'
import { routes } from './routes'
import cors from '@fastify/cors'

const app = Fastify({logger:true})


const start = async () => {
    
    
  await app.register(routes);  
    
  await app.register(cors);
  
  const HOST = '0.0.0.0';

    try {
      await app.listen({ port: 3333, host: HOST})
    } catch (err) {
      process.exit(1)
    }
  } 


  start();