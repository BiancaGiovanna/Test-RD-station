import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--color-gray-30);
  position: fixed;
  z-index: 9;
  > header {
    background-color: var(--color-white);
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    > img {
      width: 20%;
      height: 90%;
    }
    > ul {
      padding: 20px 10px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        position: relative;
        cursor: pointer;
        font-size: 1.25rem;
        padding: 15px;
        align-items: center;

        :before {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: var(--color-primary-60);

          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }

        :hover {
          color: var(--color-primary-light);
          :before {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
    }
    button{
      font-size: 1.1rem;
      margin-left: 15px;
      font-weight: bold;
      color: var(--color-black);
      text-transform: uppercase;
    }
  }
`;
