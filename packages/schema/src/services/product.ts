import { type } from 'arktype'
import { LocaleSchema, WeightUnitSchema } from '../types/food'

export const ProductCreateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 75',
  description: '0 <= string <= 1000?',
  slug: '2 <= string <= 50?',
})
export type ProductCreate = typeof ProductCreateSchema.infer

export const ProductUpdateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 75?',
  description: '0 <= string <= 1000?',
  slug: '2 <= string <= 50?',
  isAvailableForPurchase: 'boolean?',
})
export type ProductUpdate = typeof ProductUpdateSchema.infer

export const ProductVariantCreateSchema = type({
  locale: LocaleSchema,
  productId: 'string',
  name: '2 <= string <= 50',
  weightValue: 'number >= 0',
  weightUnit: WeightUnitSchema,
  gross: 'number >= 0',
  net: 'number >= 0?',
  calories: 'number >= 0?',
  protein: 'number >= 0?',
  fat: 'number >= 0?',
  carbohydrate: 'number >= 0?',
  sku: 'string <= 50?',
})
export type ProductVariantCreate = typeof ProductVariantCreateSchema.infer

export const ProductVariantUpdateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 50?',
  weightValue: 'number >= 0?',
  weightUnit: WeightUnitSchema.optional(),
  gross: 'number >= 0?',
  net: 'number >= 0?',
  calories: 'number >= 0?',
  protein: 'number >= 0?',
  fat: 'number >= 0?',
  carbohydrate: 'number >= 0?',
  sku: 'string <= 50?',
})
export type ProductVariantUpdate = typeof ProductVariantUpdateSchema.infer
