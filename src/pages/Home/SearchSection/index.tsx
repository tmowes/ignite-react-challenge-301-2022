import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { SearchFormSchema, searchSchema } from './searchSchema'
import * as S from './styles'
import { SearchSectionProps } from './types'

export function SearchSection(props: SearchSectionProps) {
  const { filterPosts, count } = props

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchSchema),
  })

  async function onSearchPosts({ query }: SearchFormSchema) {
    await filterPosts(query)
  }

  return (
    <S.Container onSubmit={handleSubmit(onSearchPosts)}>
      <S.Info>
        <S.Title>Publicações</S.Title>
        {count > 0 && (
          <S.InfoCount>
            {count}
            {count === 1 ? 'publicação' : ' publicações'}
          </S.InfoCount>
        )}
      </S.Info>
      <S.SearchForm>
        <S.SearchInput
          type="text"
          autoComplete="off"
          placeholder="Busque conteúdo"
          {...register('query')}
        />
        <S.SearchButton type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
        </S.SearchButton>
      </S.SearchForm>
    </S.Container>
  )
}
