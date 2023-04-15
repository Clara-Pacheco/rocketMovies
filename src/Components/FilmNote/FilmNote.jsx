import { Container } from './styles.js'

import { Tag } from '../Tag/Tag'

import { FiStar } from 'react-icons/fi'

export function FilmNote({ title,children}){
  return (
    <Container >
      <h2>{ title }</h2>
      <div>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </div>
      {children}
      <Tag>
        
      </Tag>
    </Container>
  )

}