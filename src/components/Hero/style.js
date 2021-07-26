import styled from "styled-components";
import background from '../../assets/shape.svg';
import background2 from '../../assets/shape2.png';

export const Container = styled.div`
  width: 100%;
  height: 10000px;
  display: flex;
  
 
  .cover{
    width: 100%;
    height: 950px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${background});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    .oportunidade{
    width: 650px;
    height:350px;
    margin-left: 50px; 
    margin-top: 100px;
    
    >h1{ 
    width: 650px;
    height: 112px;
    left: 108px;
    font-family: 'Darker Grotesque';
    font-style: normal;
    font-weight: 900;
    font-size: 56px;
    line-height: 100%;
      >span{
        font-family: 'Darker Grotesque';
        font-style: normal;
        font-weight: 900;
        font-size: 56px;
        line-height: 100%;
        color: var(--color-primary-60);
      }
    }
    >p{
      width: 600px;
      height: 90px;
      margin-top: 52px;
      font-family: 'Nunito' Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 150%;
      color: #212429;
    }
  }
  .form-area{
    position: absolute;
    z-index: 1;
    width: 650px;
    height: 1383px;
    right: 50px;
    top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
    box-shadow: 0px 4px 12px rgba(33, 36, 41, 0.14);
    border-radius: 2px;
  }
  }
  article{
    position: absolute;
    width: 100%;
    height: 331px;
    left: 0px;
    top: 950px;
    background: var(--color-primary-100 );
    >h3{
      /* position: absolute; */
      width: 600px;
      height: 35px;
      margin-left: 108px;
      margin-top: 50px;

      font-family: Darker Grotesque;
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 110%;
      color: var(--color-white);
    }
    >p{
      width: 600px;
      height: 112px;
      margin-left: 108px;
      margin-top: 25px;

      font-family: 'Nunito' Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;

      color: var(--color-white);
    }
  }
  section{
    position: absolute;
    width: 100%;
    height: 902px;
    left: 0px;
    top: 1250px;

    background-image: url(${background2});
    /* background-position: center top; */
  background-size: cover;
  background-repeat: no-repeat;
  }
`;