import { defineField, defineType } from 'sanity'

export const smartProduct = defineType({
  name: 'smartProduct',
  title: 'Smart Automation Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description:
        'The product type. For the Servo system, the complete system and its separately-sold components (Motor, Oil Pump, Servo Drives) all go under "Servo Energy Saving System".',
      type: 'string',
      options: {
        list: [
          { title: 'PLC (Programmable Logic Controller)', value: 'PLC' },
          { title: 'Servo Energy Saving System', value: 'Servo Energy Saving System' },
          { title: 'Cards for PLC System', value: 'Cards for PLC System' },
          { title: 'Lubrication Pump', value: 'Lubrication Pump' },
          { title: 'Mould Clamps', value: 'Mould Clamps' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes / Variants',
      description:
        'Add each size or variant available, e.g. "5 HP", "10 HP", "20 Ton". Shown on the product, not as separate cards.',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'spec',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower numbers appear first on the products page.',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
})
