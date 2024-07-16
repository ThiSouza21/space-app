import styled from "styled-components";

const WrapperCardImageSpace = styled.figure`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  background-color: #001634;
  color: #d9d9d9;
  word-break: break-word;

  > img {
    border-radius: 15px 15px 0 0;

    width: 100%;
    height: 100%;
  }
  > figcaption {
    padding: 1em;
  }
  > figcaption footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
  }
  > figcaption footer p {
    width: 100%;
  }
  > figcaption footer div {
    display: flex;
    gap: 1.5em;
  }
  > figcaption div button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const CardsImages = ({ children, imgSpace, textFont }) => {
  return (
    <WrapperCardImageSpace>
      <img src={imgSpace} alt="Foto Espaço" />
      <figcaption>
        <h5> {children}</h5>
        <footer>
          <p>{textFont}</p>
          <div>
            <button>
              <img
                src="/images/icones/favorite_outline.svg"
                alt="Icone Coração"
              />
            </button>
            <button>
              <img src="/images/icones/open_in_full.svg" alt="" />
            </button>
          </div>
        </footer>
      </figcaption>
    </WrapperCardImageSpace>
  );
};

export default CardsImages;
[];
