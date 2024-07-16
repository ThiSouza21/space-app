import styled from "styled-components";
import tags from "../../json/tags.json";

const ButtonTags = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  outline: none;
  border-radius: 10px;
  padding: 0.7em 0.4em;
  border: 1px solid #c98cf1;
  height: fit-content;
  color: #d9d9d9;
`;

const ButtonsTags = () => {
  return (
    <>
      {tags.map((tag) => {
        return <ButtonTags key={tag.id}>{tag.titulo}</ButtonTags>;
      })}
    </>
  );
};

export default ButtonsTags;
