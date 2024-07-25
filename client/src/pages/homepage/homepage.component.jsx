import styled from "styled-components";

import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="directory-menu">
        <Directory />
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  padding: 20px 80px;
`;

export default HomePage;
