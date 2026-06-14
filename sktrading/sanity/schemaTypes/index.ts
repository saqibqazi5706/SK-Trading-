import { type SchemaTypeDefinition } from 'sanity'

import { machine } from './machine'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [machine],
}
