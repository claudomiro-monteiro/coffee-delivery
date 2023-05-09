import { Minus, Plus } from 'phosphor-react'
import { CardCounter } from './styles'

interface InputAmountProps {
  size: 'small' | 'medium'
  amount: number
  onAddAmount: () => void
  onRemoveAmount: () => void
}

export function InputAmount({
  size,
  onAddAmount,
  onRemoveAmount,
  amount,
}: InputAmountProps) {
  return (
    // <div>
    <CardCounter size={size}>
      <button type="button" disabled={amount <= 1} onClick={onRemoveAmount}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" readOnly value={amount} />
      <button type="button" disabled={amount > 99} onClick={onAddAmount}>
        <Plus size={14} weight="fill" />
      </button>
    </CardCounter>
    // </div>
  )
}
