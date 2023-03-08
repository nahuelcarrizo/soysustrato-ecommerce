/* import product from './products'

export const schemaTypes = [product]
 */

import categories from './categories'
import hero from './home/hero'
import home from './home/home'
import productWithSizes from './productWithSizes'
import products from './product'
import tag from './tag'
import userReview from './home/user-review'

// First, we must import the schema creator

/* import schemaTypes from 'all:part:@sanity/base/schema-type' */

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default [products, productWithSizes, categories, tag, home, hero, userReview]
