import { type SchemaTypeDefinition, type Template } from 'sanity'

import { machine } from './machine'
import { accessory } from './accessory'
import { smartProduct } from './smartProduct'
import { taskMachine } from './taskMachine'

export const schema: {
  types: SchemaTypeDefinition[]
  templates: (prev: Template[]) => Template[]
} = {
  types: [machine, accessory, smartProduct, taskMachine],
  templates: (prev) => [
    ...prev,
    {
      id: 'machine-by-category',
      title: 'Machine by category',
      schemaType: 'machine',
      parameters: [{ name: 'category', type: 'string' }],
      value: (params: { category: string }) => ({ category: params.category }),
    },
    {
      id: 'accessory-by-category',
      title: 'Accessory by category',
      schemaType: 'accessory',
      parameters: [{ name: 'category', type: 'string' }],
      value: (params: { category: string }) => ({ category: params.category }),
    },
    {
      id: 'smartProduct-by-category',
      title: 'Smart Automation product by category',
      schemaType: 'smartProduct',
      parameters: [{ name: 'category', type: 'string' }],
      value: (params: { category: string }) => ({ category: params.category }),
    },
  ],
}
