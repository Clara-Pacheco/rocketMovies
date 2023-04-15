import { Container } from './styles.js'

export function Button({ value, ...rest}){
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
}