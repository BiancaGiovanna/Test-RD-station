import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    >header{
      width: 90%;
      display: flex;
      margin-top: 40px;
      padding-bottom: 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid var(--color-gray-30);
      margin-bottom: 32px;

      >h4{
        width: 448px;
        height: 52px;
        left: 860px;
        font-family: 'Darker Grotesque';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 110%;      
        text-align: center;
        color: var(--color-gray-100);
      }
      >h5{
        width: 275px;
        height: 17px;
        margin-top: 16px;


        font-family: 'Nunito' Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 120%;
        text-align: center;

        color: var(--color-gray-70);
      }
    }
    label{
      width: 90%;
      display: flex;
      flex-direction: column;
      font-family: 'Nunito' Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 24px;
      /* margin-top: 30px ; */
    }
    >input, select{
        width: 90%;
        height: 40px;
        background: var(--color-white);
        padding: 10px;
        font-family: 'Nunito' Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;

        margin: 20px 0px;
        border: 2px solid var(--color-black);
        box-sizing: border-box;
        box-shadow: inset 6px 6px 0px #EEFBFB;
    }
    input[type=radio] {
      width: 50%;
      height: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      box-shadow: none;
    }
    ul {
      display: flex;
      /* list-style: circle; */
      /* justify-content: center; */
      /* align-items: center; */
      flex-direction: column;
      margin: 40px;
    }
    >button{
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px;
      margin-top: 20px;
      width: 448px;
      height: 40px;
      left: 0px;
      top: 0px;

      font-family: 'Nunito' Sans;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 150%;

      text-align: center;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      color: var(--color-gray-100);

      background: var(--color-highlight-60);

      flex: none;
      order: 0;
      flex-grow: 0;
      /* margin: 0px 0px; */
      :hover{
        background: var(--color-highlight-50);
      }
    }
  }
`;