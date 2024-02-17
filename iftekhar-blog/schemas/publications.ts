import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'string',
    }),
  ],
})
