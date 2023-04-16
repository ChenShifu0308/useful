import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import xmlFormatter from 'xml-formatter'

const SAMPLE = `
<root>
  <content>
    <p>This is <b>some</b> content.</p>
      </content>
        </root>
`.trim()

const format = (src: string) => {
    return xmlFormatter(src, {
        indentation: '  ',
        filter: (node: any) => node.type !== 'Comment',
        collapseContent: true,
        lineSeparator: '\n'
    })
}

export default function xml_formatter() {
    let [form, setForm] = useState({
        src: SAMPLE,
        dst: format(SAMPLE)
    });
    const onChangeHandler = (e: any) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        let tmp = {
            src: '',
            dst: '',
        }
        switch (target.name) {
            case 'src':
                try {
                    tmp.dst = format(value)
                } catch (e) {
                    tmp.dst = form.dst
                }
                break;
            case 'dst':
                tmp.src = form.src
                break;
            default:
                break;
        }
        setForm({ ...tmp, [target.name]: value });
    }

    return (
        <div className='w-full h-full'>
            <div>
                <h1 className='h-10 text-2xl font-bold m-2'>XML Formatter</h1>
            </div>
            <Box sx={{ p: 1 }} >
                <span>Input</span>
                <TextField label="" fullWidth={true} multiline rows={10} name="src" variant="outlined" size="small" fullWidth onChange={onChangeHandler} value={form.src} />
            </Box>
            <Box sx={{ p: 1 }} >
                <span>Output</span>
                <TextField label="" fullWidth={true} multiline rows={10} name="dst" variant="outlined" size="small" fullWidth onChange={onChangeHandler} value={form.dst} />
            </Box>
        </div>
    )
}
