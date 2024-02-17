import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ongoing-research',
  title: 'Ongoing Research',
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
