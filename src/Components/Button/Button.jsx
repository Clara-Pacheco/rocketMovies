import { Container } from './styles.js'

export function Button({ title,toSave=false, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
      toSave={toSave}
    >
      {title}

    </Container>
  )
}