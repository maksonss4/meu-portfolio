// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/meu-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">
                Olá, meu nome é {userData.nameUser}.
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Seja{" "}
              <Text as="span" type="heading1" color="brand1">
                bem-vindo
              </Text>{" "}
              ao meu{" "}
              <Text as="span" type="heading1" color="brand1">
                portfólio!
              </Text>{" "}
              Navegue pela página e conheça um pouco sobre mim e alguns dos meus
              <Text as="span" type="heading1" color="brand1">
                {" "}
                projetos.
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              Conheça aqui neste ambiente, criado especialmente para você,
              alguns dos meus projetos, tecnologias e ferramentas mais
              utilizadas.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Veja meus projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos{" "}
                <Text as="span" color="brand5">
                  meus projetos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
