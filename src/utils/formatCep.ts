import { FormEvent } from 'react'

export function formattedCep(e: FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9
  let cep = e.currentTarget.value
  cep = cep.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = cep

  return e
}
