import { Injectable } from '@nestjs/common';

// ! You'll need this when querying the database
import knexInstance from '../knex/knex';

// ! Left here for ease
export interface Venue {
  id: number;
  name: string;
  country_iso2: string;
  state: string;
  city: string;
}
const DEFAULT_VENUES_LIMIT = 15;
const MAX_VENUES_LIMIT = 100;

@Injectable()
export class AppService {
  async getVenues(limit: number): Promise<Venue[]> {
    const venuesLimit = this.getVenuesLimit(limit);
    const result: Venue[] = (await knexInstance.raw(`select * from venues limit ${venuesLimit}`))[0];
    return  result;
  }

  private getVenuesLimit(limitInput: number): number {
    if(!limitInput) return DEFAULT_VENUES_LIMIT;

    if(limitInput > MAX_VENUES_LIMIT) return MAX_VENUES_LIMIT;

    return limitInput;
  }
}
