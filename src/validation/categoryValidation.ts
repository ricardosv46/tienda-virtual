import { FormError } from '@hooks/useForm'
import { isEmpty } from '@utils'

export interface Category {
  name: string
  description: string
  image: any
}

export const categoryValidation = ({ name, description, image }: Category) => {
  const errors: FormError<Category> = {}

  if (isEmpty(name)) {
    errors.name = 'El campo es requerido'
  }

  if (isEmpty(description)) {
    errors.description = 'El campo es requerido'
  }

  if (!image) {
    errors.image = 'La imagen es requerida'
  }

  return errors
}
