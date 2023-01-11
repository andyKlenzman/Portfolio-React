import React from "react";
import myFace from "../../assets/imgs/myFace.jpg";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50%;
  height: 250px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
    border:5px double var(--secondaryColor);
    border-radius: 500px;
   
  

`;

const Headshot = () => {
  return (
    <div className="col-4" style={{display: "flex" , justifyContent:"center", alignItems:"center", marginRight:"auto", marginLeft:"auto"}}>
      <Image
        src={myFace}
        alt="Andy Klenzman professional headshot"
        
      />
    </div>
  );
};

export default Headshot;
