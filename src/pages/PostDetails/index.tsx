import { useParams } from 'react-router-dom'

import { PostDetailsParams } from './types'

export function PostDetails() {
  const { issueId } = useParams<PostDetailsParams>()
  return (
    <div>
      <h1>PostDetailsParams</h1>
      <h1>{issueId}</h1>
    </div>
  )
}
