import { type } from 'arktype'

export const LocaleSchema = type('"en" | "ru"')
export type Locale = typeof LocaleSchema.infer

export const LocaleValueSchema = type({
  locale: LocaleSchema,
  value: 'string',
})
export type LocaleValue = typeof LocaleValueSchema.infer

export const WeightUnitSchema = type('"G" | "KG" | "ML" | "L" | "OZ" | "LB"')
export type WeightUnit = typeof WeightUnitSchema.infer
