"use client";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import './tinymce.css'
export type WyswigTextEditorProps = {
  text: string;
  onTextChange?: (newText: string) => void;
  placeholder?: string;
};

const TINYMCE_APIKEY="o3t05fggm9oo0qa6ryqaavbiufkxj9qf9dmmll5vmsy8lkpo"
import EditorBold from '../../../assets/editorBold.svg?raw'
import EditorItalic from '../../../assets/editorItalic.svg?raw'
import EditorUnderline from '../../../assets/editorTextUnderline.svg?raw'
import EditorNumberedList from '../../../assets/editorNumberedList.svg?raw'
import EditorBulletedList from '../../../assets/editorBulletedList.svg?raw'
import EditorQuote from '../../../assets/editorQuote.svg?raw'
import EditorCode from '../../../assets/editorCode.svg?raw'

export default function WyswigTextEditor({
  text,
  onTextChange,
  placeholder = "Ask me anything...",
}: WyswigTextEditorProps) {
  const editorRef = useRef<any>(null);

  return (
    <div>
      <Editor
        apiKey={TINYMCE_APIKEY}
        onInit={(_, editor) => (editorRef.current = editor)}
        value={text}
        onEditorChange={(content) => onTextChange?.(content)}
        init={{
          setup(editor) {
            editor.ui.registry.addIcon('bold', `
              ${EditorBold}
            `);
            editor.ui.registry.addIcon('italic', `
              ${EditorItalic}
            `);
            editor.ui.registry.addIcon('underline', `
              ${EditorUnderline}
            `);
            editor.ui.registry.addIcon('numlist', `
              ${EditorNumberedList}
            `);
            editor.ui.registry.addIcon('bullist', `
              ${EditorBulletedList}
            `);
            editor.ui.registry.addIcon('blockquote', `
              ${EditorQuote}
            `);
            editor.ui.registry.addIcon('codesample', `
              ${EditorCode}
            `);
          },
          menubar: false,
          statusbar: false,
          branding: false,
          height: 130,
          placeholder,
          plugins: ["lists", "codesample", "image", "formatselect"],

          toolbar:
            "formatselect bold italic underline numlist bullist blockquote codesample image",

          block_formats: "Heading 1=h1; Heading 2=h2",

          valid_elements:
            "p,br,strong/b,em/i,u,blockquote,pre,code,ol,ul,li,img[src|alt|width|height],h1,h2",
          forced_root_block: "",

          toolbar_mode: "sliding",
          content_style: `
            body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto; border: none !important; 
                .tox.tox-tinymce {
                    border: none;
                }
            }
            pre, code { background:#0f172a0f; }
            blockquote { margin:8px 0; padding:8px 12px; color:#334155; }
          `,
        }}
      />
    </div>
  );
}
