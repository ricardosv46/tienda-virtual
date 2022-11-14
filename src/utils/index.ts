export const isServer = () => typeof window === 'undefined'

export const isEmpty = (v?: string) => v?.trim().length === 0

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const classNames = (cln: Array<string | undefined>) => {
  return cln.join(' ').trim()
}

export const isEmail = (email?: string) => {
  const regEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  return regEmail.test(email ?? '')
}

export const generatedTotal = (items: number, itemporpage: number) => {
  const n = Math.ceil(items / itemporpage)
  return Array(n)
    .fill(null)
    .map((_, i) => i + 1)
}

export const isNumberInteger = (number?: string) => {
  const regNumber = /^\d{1,7}?$/
  return regNumber.test(number ?? '')
}

export const isNumberDecimal = (number?: string) => {
  const regNumber = /^\d{1,7}([.][0-9]{1,2})?$/
  return regNumber.test(number ?? '')
}

export const isNumber = (number: string) => {
  const regex = /^[0-9]*$/
  return regex.test(number)
}
