export type SearchSectionProps = {
  filterPosts: (query?: string) => Promise<void>
  count: number
}
