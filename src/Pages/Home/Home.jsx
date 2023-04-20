import { Container, Button, Content, TagGroup, FilmInfo } from './styles.js'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../Components/Header/Header.jsx'
import { FilmNote } from '../../Components/FilmNote/FilmNote.jsx'
import { Tag } from '../../Components/Tag/Tag.jsx'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        
        <Button to="/create">
          <FiPlus />
          Adicionar filme
        </Button>
      </div>
      <Content>
      <FilmInfo>
        <FilmNote 
          title="Interestellar"
          children="Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida. Cooper, ex-piloto da NASA, tem
          uma fazenda com sua família. Murphy, a filha de dez
          anos de Cooper, acredita que seu quarto está
          assombrado por um fantasma que tenta se comunicar
          com ela. Pai e filha descobrem que o 'fantasma'
          é uma inteligência desconhecida que está enviando
          mensagens codificadas através de"  
        />
        <TagGroup>
          <Tag value="Ficção Científica" />
          <Tag  value= "Drama" />
          <Tag value= "Família" />
        </TagGroup>
      </FilmInfo>

      <FilmInfo>
        <FilmNote 
          title="Interestellar"
          children="Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida. Cooper, ex-piloto da NASA, tem
          uma fazenda com sua família. Murphy, a filha de dez
          anos de Cooper, acredita que seu quarto está
          assombrado por um fantasma que tenta se comunicar
          com ela. Pai e filha descobrem que o 'fantasma'
          é uma inteligência desconhecida que está enviando
          mensagens codificadas através de" 
        />
        <TagGroup>
          <Tag value="Ficção Científica" />
          <Tag  value= "Drama" />
          <Tag value= "Família" />
        </TagGroup>
      </FilmInfo>

      <FilmInfo>
        <FilmNote 
          title="Interestellar"
          children="Pragas nas colheitas fizeram a civilização
          humana regredir para uma sociedade agrária em futuro
          de data desconhecida. Cooper, ex-piloto da NASA, tem
          uma fazenda com sua família. Murphy, a filha de dez
          anos de Cooper, acredita que seu quarto está
          assombrado por um fantasma que tenta se comunicar
          com ela. Pai e filha descobrem que o 'fantasma'
          é uma inteligência desconhecida que está enviando
          mensagens codificadas através de" 
        />
        <TagGroup>
          <Tag value="Ficção Científica" />
          <Tag  value= "Drama" />
          <Tag value= "Família" />
        </TagGroup>
      </FilmInfo>  
      </Content>
    </Container>
  )
}


