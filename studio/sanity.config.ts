import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'e-soysustrato',

  projectId: '13iwwz14',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
