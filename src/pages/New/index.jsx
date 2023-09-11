import { Container, Form } from './styles';
import { Header } from '../../components/Header' 
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section'


export function New(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href='/'>voltar</a>
          </header>

          <Input placeholder='Titulo'/>
          <Textarea placeholder='Observações'/>

          <Section title='Links úteis'>
            <NoteItem value="test" />
            <NoteItem isNew placeholder='Novo Link'/>

          </Section>

        </Form>
      </main>
    </Container>
  );
}