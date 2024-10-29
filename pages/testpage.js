import Head from "next/head";
import PrintPage from "../components/printPage";
import styled from "styled-components";
import { useState } from "react";
const PageHeader = styled.div`
  width: 600px;
  margin: auto;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 42px;
  padding-bottom: 24px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.36px;
    color: #585858;
    margin-bottom: 8px;
  }

  p {
    color: #797979;
    margin: 0;
  }
`;

// https://www.w3schools.com/howto/howto_css_switch.asp
const SwitchIcon = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 10px;
margin-bottom: -5px;

.p {
  color: #2778a5
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 5px;
  margin-right: 5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2778a5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2778a5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.toggle-off {
  color: #ccc
}

.toggle-on {
  color: #2778a5;
}
`

export default function Testpage({}) {

  const [lastEdited, setLastEdited] = useState("Hardback Photobook last edited on Thursday 13 April 2022 at 16:28");
  const [useManual, setUseManual] = useState(true);

  const handleToggle = () => {
    setUseManual(!useManual); // Toggle useManual between true and false
  };
  
  return (
    <div>
      <Head>
        <title>Test Page | Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <h1>Trip to the Beach</h1>
        <p>{lastEdited}</p>
        <SwitchIcon>
          <p className={useManual ? "toggle-off" : "toggle-on"}>react-dnd-kit</p>
          <label className="switch">
            <input 
            type="checkbox"
            checked={useManual}
            onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
          <p className={useManual ? "toggle-on" : "toggle-off"}>manual code</p>
      </SwitchIcon>
      </PageHeader>
      <PrintPage
        setLastEdited={setLastEdited}
        useManual={useManual}
        data={[
          {
            title: "Front Print",
            images: [
              "https://videodelivery.net/775b1b7196b2c126b8dc343416211fdb/thumbnails/thumbnail.jpg?height=1080",
            ],
          },
          {
            title: "Page 2",
            images: [
              "https://videodelivery.net/9ad2bb839e4e3cc1074e5d73b0a0379b/thumbnails/thumbnail.jpg?height=1080",
              "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/large",
            ],
          },
          {
            title: "Page 3",
            images: [
              "https://videodelivery.net/91097538e177847ebeb934a492e146e9/thumbnails/thumbnail.jpg?height=1080",
              "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/b73c2865-7a02-408b-654d-89ce2512ae00/large",
            ],
          },
        ]}
      />
    </div>
  );
}
