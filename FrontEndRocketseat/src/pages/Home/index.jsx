// Erro está no input
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { FiPlus } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/section';
import { Note } from '../../components/note';
import { Input } from '../../components/input';
import { Header } from '../../components/header';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node.js" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '1', name: 'rocketseat' }
            ]
          }}
          />
        </Section>

      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota


      </NewNote>

    </Container>

  );
}