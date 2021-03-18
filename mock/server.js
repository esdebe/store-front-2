/* eslint-disable import/prefer-default-export */

import { createServer, Model } from 'miragejs'

export default function makeServer({ environment }) {
  return createServer({
    environment,
    models: {
      products: Model,
    },

    routes() {
      this.namespace = 'api'

      this.resource('products')
    },
  })
}
