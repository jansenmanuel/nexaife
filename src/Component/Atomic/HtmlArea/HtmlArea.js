import React from 'react';
import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import style from './HtmlArea.module.scss'
import TiptapImage from "@tiptap/extension-image";
import UnderlineExt from "@tiptap/extension-underline";
import LinkExt from "@tiptap/extension-link";
import {Placeholder} from "@tiptap/extension-placeholder";
import {Toolbar} from "./Toolbar";

const HtmlArea = (
  {
    content,
    onChange,
    disable = false,
    placeholder = "Type what you see is what you get",
    ...props
  }
) => {

  const {id} = props

  const editor = useEditor({
    content,
    editable: !disable,
    editorProps: {
      attributes: {
        class: `${style.Content} ${disable ? style.disabled : ""}`,
      },
    },
    extensions: [
      StarterKit,
      UnderlineExt,
      Image,
      Placeholder.configure({
        placeholder: placeholder,
      }),
      LinkExt.configure({
        openOnClick: true,
        autolink: true,
      }),
    ],
    onUpdate: ({editor}) => {
      const html = editor.getHTML()
      if (onChange) {
        onChange(html);
      }
    }
  })

  return (
    <div id={id} className={`${style.Rte} ${props.className}`} {...props}>
      <Toolbar editor={editor} disable={disable}/>
      <EditorContent onChange={onChange} editor={editor}/>
    </div>
  );
};

export default HtmlArea;

export const Image = TiptapImage.extend({
  addOptions: {
    ...TiptapImage.options,
    allowBase64: true,
  },
});