import { Container } from "./styles.js";


export function ButtonText({icon:Icon,value, ...rest }){
  return(
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {value}
    </Container>
  )
}