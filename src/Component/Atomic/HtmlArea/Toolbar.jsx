import style from './HtmlArea.module.scss'
import NcHome from "../../Asset/Icon/NcHome";
import {Divider, Input, Popover} from "antd";
import NcBold from "../../Asset/Icon/NcBold";
import NcItalic from "../../Asset/Icon/NcItalic";
import NcUnderline from "../../Asset/Icon/NcUnderline";
import NcStrikeThrough from "../../Asset/Icon/NcStrikeThrough";
import NcCode from "../../Asset/Icon/NcCode";
import NcLink from "../../Asset/Icon/NcLink";
import NcQuote from "../../Asset/Icon/NcQuote";
import NcImage from "../../Asset/Icon/NcImage";
import {useCallback, useState} from "react";
import {Button as ButtonV223} from "../../index";

export const Toolbar = ({disable, editor}) => {

  const [linkVal, setLinkVal] = useState('')

  const handleUpload = async (e) => {
    const files = e.target.files;
    const src = await getDataUrl({files});

    if (!src) {
      alert("error");
      return;
    }

    addImage({src, editor});
    e.target.value = null;
  };

  const setLink = (input) => {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: input })
      .run();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLink(linkVal);
    setLinkVal("");
  };

  if (!editor) {
    return null;
  }

  const addLink = (
    <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
      <Input value={linkVal} onChange={(e) => setLinkVal(e.target.value)}/>
      <ButtonV223
        onClick={handleSubmit}
        buttonType={"button-primary"}
        secondaryColor={"white"}
        label="Button"
        size={"xs"}
      />
    </div>
  )

  return (
    <div className={`${style.Toolbar} ${disable ? "disabled" : ""}`}>
      <div style={{display: "flex", justifyItems: "center", alignItems: 'center', gap: 16}}>
        <div className={!disable && style.Icon} onClick={() => !disable && editor.chain().focus().toggleBold().run()}>
          <NcBold className={disable && style.DisabledIcon}/>
        </div>
        <div className={!disable && style.Icon} onClick={() => !disable && editor.chain().focus().toggleItalic().run()}>
          <NcItalic className={disable && style.DisabledIcon}/>
        </div>
        <div className={!disable && style.Icon}
             onClick={() => !disable && editor.chain().focus().toggleUnderline().run()}>
          <NcUnderline className={disable && style.DisabledIcon}/>
        </div>
        <div className={!disable && style.Icon} onClick={() => !disable && editor.chain().focus().toggleStrike().run()}>
          <NcStrikeThrough className={disable && style.DisabledIcon}/>
        </div>
        <Divider style={{height: '24px'}} type={'vertical'}/>
        <div className={!disable && style.Icon}
             onClick={() => !disable && editor.chain().focus().toggleCodeBlock().run()}>
          <NcCode className={disable && style.DisabledIcon}/>
        </div>
        <Popover
          getPopupContainer={trigger => trigger.parentNode}
          placement={'bottom'}
          content={!disable && addLink}
          trigger="click"
          title={!disable && 'Add Link'}
        >
          <div className={!disable && style.Icon}>
            <NcLink className={disable && style.DisabledIcon}/>
          </div>
        </Popover>
        <div className={!disable && style.Icon}
             onClick={() => !disable && editor.chain().focus().toggleBlockquote().run()}>
          <NcQuote className={disable && style.DisabledIcon}/>
        </div>
        <label className={!disable && style.Icon}>
          <NcImage className={disable && style.DisabledIcon}/>
          <input
            type="file"
            accept="image/*"
            disabled={disable}
            onChange={handleUpload}
            style={{display: "none"}}
            alt={"img"}
          />
        </label>
      </div>
    </div>
  );
};

export async function getDataUrl({files}) {
  if (!files) return null;
  const file = files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise((resolve) => (reader.onload = () => resolve("")));
  return reader.result;
}

export function addImage({src, editor}) {
  editor.chain().focus().setImage({src}).run();
}
