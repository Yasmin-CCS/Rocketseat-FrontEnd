import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';


export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img
        src="https://github.com/Yasmin-CCS.png"
        alt="foto do usuário"/>
        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>

    <Logout>
      <RiShutDownLine/>
    </Logout>

    </Container>
  );
}