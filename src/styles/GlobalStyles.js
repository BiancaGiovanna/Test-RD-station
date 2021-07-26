import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  outline:0px;
  box-sizing: border-box;
  font-family: 'Darker Grotesque', sans-serif;
  font-family: 'Nunito', sans-serif;
  /* list-style: none; */
  a{
    color:white;
    text-decoration:none;
  }
}
:root{
  --color-primary-100:#0B485B;
  --color-primary-60:#19C1CE;
  --color-primary-50:#07E5EB;
  --color-highlight-60:#F2BF4E;
  --color-highlight-50:#F4CA6D;
  --color-black:#000000;
  --color-gray-100:#212429;
  --color-gray-70:#7E8A98;
  --color-gray-60:#97A1AC;
  --color-gray-30:#CFD3D8;
  --color-gray-10:#F1F3F5;
  --color-white:#FFFFFF;
}

  ::-webkit-scrollbar{
    width: 8px;
    background-color: var(--color-primary-60);
  }

  ::-webkit-scrollbar-track{
    background-color: var(--color-gray-70);
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 2px;
    background-color: var(--color-primary-60);
  }
  .btn-white{
    background-color: var(--color-white);
    color: var(--color-black);
    :hover {
      background: rgba(0, 0, 0, 0.16);
      }
  }
  button{
      width: 125px;
      height: 35px;
      font-size: 0.875rem;
      color: var(--color-white);
      transition: 0.2s;
      margin-left: 0px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      border-bottom: 4px solid black;
      background-color: var(--color-primary-60);
      :hover {
        background-color: var(--color-primary-50);
      }
  }
  
`;
