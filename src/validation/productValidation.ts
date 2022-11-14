import { FormError } from '@hooks/useForm'
import { isEmpty, isNumberDecimal, isNumberInteger } from '@utils'

export interface Category {
  name: string
  description: string
  image: any
  brand: string
  price: string
  stock: string
  category: string
}

export const productValidation = ({
  name,
  description,
  image,
  brand,
  price,
  stock,
  category
}: Category) => {
  const errors: FormError<Category> = {}

  if (isEmpty(name)) {
    errors.name = 'El campo es requerido'
  }

  if (isEmpty(description)) {
    errors.description = 'El campo es requerido'
  }

  if (isEmpty(String(category))) {
    errors.category = 'El campo es requerido'
  }

  if (isEmpty(brand)) {
    errors.brand = 'El campo es requerido'
  }

  if (!isNumberDecimal(price)) {
    errors.price = 'El precio deber ser un número válido'
  }

  if (!isNumberInteger(stock)) {
    errors.stock = 'El stock deber ser un número válido'
  }

  if (!image) {
    errors.image = 'La imagen es requerida'
  }

  return errors
}
