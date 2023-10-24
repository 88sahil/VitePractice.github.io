import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sahil\'s first project',

  projectId: 'o82plc3m',
  dataset: 'foodhut',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
