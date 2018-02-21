import { schema } from 'normalizr'

export const dishSchema = new schema.Entity('dish', {}, { idAttribute: 'id' })

export const arrayOfDishSchema = new schema.Array(dishSchema)

export const categorySchema = new schema.Entity('category', {}, { idAttribute: 'id' })

export const arrayOfCategorySchema = new schema.Array(categorySchema)
