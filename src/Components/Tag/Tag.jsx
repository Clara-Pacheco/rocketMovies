import { Container } from './styles.js'

export function Tag({icon:Icon, value,isNew, ...rest}){
  return(
    <Container {...rest} isNew={isNew}>
      {value}
      {Icon && <Icon size={20} /> }   
    </Container>
  )
}