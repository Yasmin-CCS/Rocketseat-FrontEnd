import { Container, Links, Content } from "./styles";
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/tag';
import { Section } from '../../components/section';

export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia amet minima commodi, 
            hic labore dolore ad aperiam nihil quis provident ut odit inventore maxime eos vitae blanditiis.
             Ut, adipisci fuga? lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia amet minima commodi, 
            hic labore dolore ad aperiam nihil quis provident ut odit inventore maxime eos vitae blanditiis.
             Ut, adipisci fuga? lorem
          </p>

          <Section title="Link Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>


          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          {/* Para colocar um "Carregando no botão, coloque e tire o loading da tag" */}
          <Button title='Voltar' loading ></Button>
        </Content>
      </main>
    </Container>

  )
};
