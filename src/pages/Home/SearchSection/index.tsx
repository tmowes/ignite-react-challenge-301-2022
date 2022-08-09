import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { SearchFormSchema, searchSchema } from './searchSchema'
import * as S from './styles'

export function SearchSection() {
  // const { fetchPosts } = usePosts()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchSchema),
  })

  async function onSearchTransactions({ query }: SearchFormSchema) {
    // await fetchPosts(query)
    console.log({ query })
  }

  return (
    <S.Container onSubmit={handleSubmit(onSearchTransactions)}>
      <input type="text" placeholder="Busque por publicações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
      </button>
    </S.Container>
  )
}
