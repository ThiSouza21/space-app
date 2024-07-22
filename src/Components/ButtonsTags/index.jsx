import styled from "styled-components";
import tags from "../../json/tags.json";

const ButtonTags = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  outline: none;
  border-radius: 10px;
  padding: 0.7em 0.4em;
  height: fit-content;
  color: #d9d9d9;
  cursor: pointer;
  border: none;

  ${({ $tagImages }) => $tagImages && "border: 1px solid #c98cf1;"}
`;

const ButtonsTags = ({ handleSetTagImage, tagImages }) => {
  return (
    <>
      {tags.map((tag) => {
        let tagExist = false;
        if (tag.id === tagImages) {
          tagExist = true;
        }

        return (
          <ButtonTags
            $tagImages={tagExist}
            onClick={() => handleSetTagImage(tag.id)}
            key={tag.id}
          >
            {tag.titulo}
          </ButtonTags>
        );
      })}
    </>
  );
};

export default ButtonsTags;
