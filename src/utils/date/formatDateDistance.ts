import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDateDistance(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
