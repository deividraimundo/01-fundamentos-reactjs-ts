import styles from './Comment.module.css'

import { useState } from 'react'
import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

interface ComentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: ComentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComent() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/deividraimundo.png"
        alt=""
      />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Deivid Raimundo</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComent} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Apaludir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}