import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { retry } from 'rxjs';

@Injectable()
export class DbService {
  constructor(private config_service: ConfigService) {}
  private ENDPOINT_ID = this.config_service.get<string>('ENDPOINT_ID');

  private readonly URL = `postgres://username:password@host/database?options=project%3D${this.ENDPOINT_ID}`;

  pool = new Pool({
    connectionString: this.URL,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 90000,
    user: this.config_service.get<string>('PGUSER'),
    password: this.config_service.get<string>('PGPASSWORD'),
    host: this.config_service.get<string>('PGHOST'),
    database: this.config_service.get<string>('PDDATABASE'),
    port: this.config_service.get<number>('port'),
    ssl: this.config_service.get<boolean>('sslmode'),
  });

  async connection_pool() {
    const connection = await this.pool.connect();
    connection.setMaxListeners(1000);

    this.pool.on('error', () => {
      retry(1);
    });

    await this.pool.end();
  }
}
