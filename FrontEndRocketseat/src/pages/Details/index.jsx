import { useState, useEffect } from 'react';
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/tag';
import { Section } from '../../components/section';

import { api } from '../../service/api'

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir Nota" />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>
            {
              data.links &&
              <Section title="Link Úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }
            {/* Para colocar um "Carregando no botão, coloque e tire o loading da tag" */}
            <Button
              title='Voltar'
              onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container>

  )
};
