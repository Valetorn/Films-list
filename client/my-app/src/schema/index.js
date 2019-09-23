import { schema } from 'normalizr';

const actorSchema = new schema.Entity('actors', undefined, {
    idAttribute: value => value._id
});
  
export const filmSchema = new schema.Entity('films', { actors: [actorSchema]}, {
    idAttribute: value => value._id
});