/* eslint-disable no-process-env */

import {defineCliConfig} from 'sanity/cli'

/* import {loadEnvConfig} from '@next/env' */

const dev = process.env.NODE_ENV !== 'production'
/* loadEnvConfig(__dirname, dev, {info: () => null, error: console.error}) */

export default defineCliConfig({
  api: {
    projectId: '13iwwz14',
    dataset: 'production',
  },
})
