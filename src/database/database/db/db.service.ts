import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import pg from 'pg';
const { Pool } = pg;

@Injectable()
export class DbService {
  constructor(private config_service: ConfigService) {}
  private ENDPOINT_ID = this.config_service.get<string>('ENDPOINT_ID');

  private readonly URL = `postgres://username:password@host/database?options=project%3D${this.ENDPOINT_ID}`;

  const pool = new Pool({
    connectionString: this.URL,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 90000,
    ssl: this.config_service.get<boolean>('sslmode'),
  });


// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
  pool.on('error', (err: any, client) => {
    return 
  })

  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const res = await client.query({});
    await client.query('COMMIT');
  }catch(e){
    await client.query('ROLLBACK');
    throw e;
  }finally{
    client.release();
  }
}
