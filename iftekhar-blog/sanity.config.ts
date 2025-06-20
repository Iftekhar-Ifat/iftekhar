import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'iftekhar-blog',

  projectId: 'o06c5s89',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
