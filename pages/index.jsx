import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Google } from "@styled-icons/boxicons-logos/Google";
import { Microsoftoutlook } from "@styled-icons/simple-icons/Microsoftoutlook";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { DiscordAlt } from "@styled-icons/boxicons-logos/DiscordAlt";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Apple } from "@styled-icons/boxicons-logos/Apple";
import { Twitch } from "@styled-icons/boxicons-logos/Twitch";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { LogOutOutline } from "@styled-icons/evaicons-outline/LogOutOutline";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 5px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  background: rgba(220, 220, 220, 0.3);
  backdrop-filter: blur(9.6px);
  -webkit-backdrop-filter: blur(9.6px);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const GenericButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: none;
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  width: 180px;
  margin: 5px;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 32px;
    height: 32px;
    color: #fff;
    transition: all 0.3s ease;
    margin-right: 5px;
  }
`;

const GoogleButton = styled(GenericButton)`
  color: #fff;
  background-color: #db4437;
`;

const FacebookButton = styled(GenericButton)`
  color: #fff;
  background-color: #1877f2;
`;

const GithubButton = styled(GenericButton)`
  color: #fff;
  background-color: #333;
`;

const OutlookButton = styled(GenericButton)`
  color: #fff;
  background-color: #0072c6;
`;

const LinkedinButton = styled(GenericButton)`
  color: #fff;
  background-color: #0a66c2;
`;

const DiscordButton = styled(GenericButton)`
  color: #fff;
  background-color: #5865f2;
`;

const InstagramButton = styled(GenericButton)`
  color: #fff;
  background-color: #e1306c;
`;

const TwitchButton = styled(GenericButton)`
  color: #fff;
  background-color: #9146ff;
`;

const TwitterButton = styled(GenericButton)`
  color: #fff;
  background-color: #1da1f2;
`;

const AppleButton = styled(GenericButton)`
  color: #fff;
  background-color: #555555;
`;

const LogoutButton = styled(GenericButton)`
  color: #fff;
  background-color: #555555;
`;

// Battle net
// gitlab
// pinterest
// reddit
// slack

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <Container>
      <ContainerButtons>
        <GoogleButton onClick={() => signIn("google")}>
          <Google />
          GOOGLE
        </GoogleButton>

        <GithubButton onClick={() => signIn("github")}>
          <Github />
          GITHUB
        </GithubButton>

        {/* <FacebookButton>
          <FacebookSquare />
          FACEBOOK
        </FacebookButton>

        <OutlookButton>
          <Microsoftoutlook />
          OUTLOOK
        </OutlookButton>

        <LinkedinButton>
          <LinkedinSquare /> LINKEDIN
        </LinkedinButton>

        <DiscordButton>
          <DiscordAlt /> DISCORD
        </DiscordButton>

        <InstagramButton>
          <Instagram /> INSTAGRAM
        </InstagramButton>

        <TwitchButton>
          <Twitch /> TWITCH
        </TwitchButton>

        <TwitterButton>
          <Twitter /> TWITTER
        </TwitterButton>

        <AppleButton>
          <Apple /> APPLE
        </AppleButton> */}
      </ContainerButtons>

      <LogoutButton onClick={() => signOut()}>
        <LogOutOutline /> LOGOUT
      </LogoutButton>
    </Container>
  );
}

{
  /* <button onClick={() => signIn("google")} className={styles.googleButton}>
        LOGIN GOOGLE
      </button> */
}

{
  /* {session?.user && (
          <a onClick={() => signOut()} className={styles.logoutButton}>
            LOGOUT
          </a>
        )} */
}
