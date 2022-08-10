import * as S from './styles'
import { IconLabelProps } from './types'

export function IconLabel(props: IconLabelProps) {
  const { icon, label } = props
  return (
    <S.Container>
      {icon}
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
