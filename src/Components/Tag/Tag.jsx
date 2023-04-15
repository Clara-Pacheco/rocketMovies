import { Container } from './styles.js'

export function Tag({ value, ...rest}){
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
}