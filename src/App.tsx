import React, { useEffect } from 'react';
import { Balloon, Img, Heading, Icon, Txt,HoverEffect,TextBox,Button } from './components/Atoms/index';
import { DeleteIcon, MailAuthForm } from './components/Molecules/index';
import { Notification } from './components/Organisms';
import images from "../src/images.png"
import images2 from "../src/images2.jpeg"
import images3 from "../src/image3.png"
import { InitNotification } from "./components/types/types"
// const styles = require("./components/utils/styles")

// interface InitNotification {
//   id: number
//   thumbnail: any,
//   title: string
//   channelName: string
//   startAt: number
//   endAt: number
// }

const notification:InitNotification= {
  id: 0,
  thumbnail: images2,
  title: "これがタイトルです",
  channelName:"UI チャンネル",
  startAt: 150000,
  endAt: 3500000
}

const App:React.FC = () => {

  const clickIcon = ():void => {
    console.log("clicked")
  }

  useEffect(() => {
    console.log("a")
  },[])

  return (
    <>
      <Balloon
        children="a"
        className="aaa"
        style={{ position: 'absolute', top: '200px' }}
      />
      <Img width="128" src={images} />
      <Heading
        children="見出し"
        className='h2'
        style={{color:"red"}}
      />
      <Icon
        // className='clickable'
        onClick={clickIcon}
        src={images}
      />
      <Txt
        className="l warning"
        text="テキスト"
        // style={{background:"blue"}}
      />
      <DeleteIcon onClick={clickIcon} />
      <Notification program={notification} onClickDelete={clickIcon} />
      {/* hoverコンポーネント */}
      <HoverEffect
        parent={<Txt text="親1" />}
        tip={<Balloon children="子1" />}
      />
      <HoverEffect
        parent={<Txt text="親1" />}
        tip={<Balloon children="子1" />}
      />
      <HoverEffect
        parent={<Img
          src={images3}
          style={{ width: "200px", height: "200px", border: "1px solid red" }}
        />}
        tip={<Img src={images2} style={{ width: "100px", height: "100px" }} />}
        tipClassName="tiptip"
      />
      <TextBox />
      <Button children="デフォルト" className="defaultButton" />
      <MailAuthForm />
    </>
  );
};

export default App;
