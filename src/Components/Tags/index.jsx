import styled from "styled-components";
import StructureContainer from "../../Components/StructureContainer";
import ButtonsTags from "../ButtonsTags";

const TitleContainerTags = styled.h3`
  font-size: 1.1em;
`;

const ContainerButtonsTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
  flex-wrap: wrap;
`;

const Tags = () => {
  return (
    <StructureContainer justify={"flex-start"}>
      <TitleContainerTags>Busque por tags:</TitleContainerTags>
      <ContainerButtonsTags>
        <ButtonsTags />
      </ContainerButtonsTags>
    </StructureContainer>
  );
};

export default Tags;
