import { Container } from './styles.js'

export function Tag({icon:Icon, value, ...rest}){
  return(
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      {value}
    </Container>
  )
}