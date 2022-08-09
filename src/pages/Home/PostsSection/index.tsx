import * as S from './styles'

export function PostsSection() {
  return (
    <S.Container>
      <S.Title>Nossos Posts</S.Title>
      <S.Posts>
        {/* {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddProduct={() => addProductToCart(product)}
          />
        ))} */}
      </S.Posts>
    </S.Container>
  )
}
