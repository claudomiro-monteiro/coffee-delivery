import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CartItemCoffeeFooter,
  CartItems,
  CoffeeButton,
  OrderCoffeeContainer,
  OrderCoffeeContent,
  OrderCoffeeForm,
  OrderCoffeePayment,
  PaymentType,
  PaymentTypeButton,
} from './styles'
import { CartItemCoffee } from './CartItemCoffee'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils/formatCurrency'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useCallback } from 'react'
import { formattedCep } from '../../utils/formatCep'
import axios from 'axios'
// import { formatedCep } from '../../utils/formatCep'
// import { useEffect } from 'react'
// import axios from 'axios'

const deliveryCurrency = 3.5

const newFormValidationSchema = z.object({
  cep: z.string().nonempty({ message: 'Digite seu CEP.' }),
  street: z.string().nonempty({ message: 'Digite o nome da sua Rua.' }),
  number: z
    .string()
    .nonempty({ message: 'Digite o número de sua residencia.' }),
  complement: z.string(),
  neighborhood: z
    .string()
    .nonempty({ message: 'Digite o nome do seu Bairro.' }),
  city: z.string().nonempty({ message: 'Digite o nome do sua Cidade.' }),
  uf: z.string().nonempty({ message: 'Digite o nome do seu Estado.' }),
  payment: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']),
})

const newFormValidationRequired = newFormValidationSchema.required()

type newFormValidation = z.infer<typeof newFormValidationRequired>

// interface newCepValidation {
//   logradouro: string
//   bairro: string
//   localidade: string
//   uf: string
// }

export function OrderCoffee() {
  const {
    control,
    register,
    handleSubmit,
    // watch,
    setValue,
    setFocus,
    formState: { isValid },
  } = useForm<newFormValidation>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      // payment: 'crédito',
    },
  })

  const navigate = useNavigate()

  const { cleanCart } = useCart()

  function handleNewContactForm(data: newFormValidation) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  const { coffee, cartCoffeeTotal } = useCart()

  const total = deliveryCurrency + cartCoffeeTotal

  const formatedSubTotal = formatCurrency(cartCoffeeTotal)
  const formatedTotal = formatCurrency(total)
  const formatedCurrency = formatCurrency(deliveryCurrency)

  async function searchCep(e: FormEvent<HTMLInputElement>) {
    const cep = e.currentTarget.value.replace(/\D/g, '')
    const response = axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        const { logradouro, bairro, localidade, uf } = res.data

        setValue('street', logradouro)
        setValue('neighborhood', bairro)
        setValue('city', localidade)
        setValue('uf', uf)
        setFocus('number')
      })
    try {
      await response
    } catch (error) {
      console.error(error)
    }
  }

  const maskCep = useCallback((e: FormEvent<HTMLInputElement>) => {
    formattedCep(e)
    // console.log(cep)
  }, [])

  return (
    <OrderCoffeeContainer onSubmit={handleSubmit(handleNewContactForm)}>
      <OrderCoffeeContent>
        <h2>Complete seu pedido</h2>

        <OrderCoffeeForm>
          <div className="mapPinLine">
            <MapPinLine size={22} />
            <p>Endereço de entrega</p>
          </div>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <div>
            <input
              id="cep"
              type="text"
              placeholder="CEP"
              onKeyUp={maskCep}
              {...register('cep')}
              onBlur={searchCep}
            />
          </div>
          <div>
            <input
              id="street"
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
          </div>
          <div className="number">
            <input type="text" placeholder="Número" {...register('number')} />
            {/* </div>
          <div> */}
            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            <label htmlFor="complement">opcional</label>
          </div>
          <div className="city">
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {/* </div>
          <div> */}
            <input type="text" placeholder="Cidade" {...register('city')} />
            {/* </div>
          <div> */}
            <input type="text" placeholder="UF" {...register('uf')} />
          </div>
        </OrderCoffeeForm>
        <OrderCoffeePayment>
          <div className="currency">
            <CurrencyDollar size={22} />
            <p>Pagamento</p>
          </div>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
          <Controller
            control={control}
            name="payment"
            render={({ field }) => {
              return (
                <PaymentType onValueChange={field.onChange} value={field.value}>
                  <PaymentTypeButton value="Cartão de Crédito">
                    <CreditCard size={16} color="#8047F8" />
                    CARTÃO DE CREDITO
                  </PaymentTypeButton>
                  <PaymentTypeButton value="Cartão de Débito">
                    <Bank size={16} color="#8047F8" />
                    CARTÃO DE DÉBITO
                  </PaymentTypeButton>
                  <PaymentTypeButton value="Dinheiro">
                    <Money size={16} color="#8047F8" />
                    DINHEIRO
                  </PaymentTypeButton>
                </PaymentType>
              )
            }}
          />
        </OrderCoffeePayment>
      </OrderCoffeeContent>
      <OrderCoffeeContent>
        <h2>Cafés selecionados</h2>
        <CartItems>
          {coffee.map((coffeeItem) => (
            <CartItemCoffee key={coffeeItem.id} coffeeItem={coffeeItem} />
          ))}
          <CartItemCoffeeFooter>
            <p>
              Total de itens<span>R${formatedSubTotal}</span>
            </p>
            <p>
              Entrega<span>R${formatedCurrency}</span>
            </p>
            <p>
              Total<span className="total">R${formatedTotal}</span>
            </p>
            <CoffeeButton
              type="submit"
              disabled={coffee.length <= 0 || !isValid}
            >
              confirmar pedido
            </CoffeeButton>
          </CartItemCoffeeFooter>
        </CartItems>
      </OrderCoffeeContent>
    </OrderCoffeeContainer>
  )
}
