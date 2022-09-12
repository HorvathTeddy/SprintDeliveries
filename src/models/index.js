// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, Dispo } = initSchema(schema);

export {
  Item,
  Dispo
};