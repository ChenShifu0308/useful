import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import xmlFormatter from 'xml-formatter'
import { useTranslation } from 'react-i18next';

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

export default function Xml_Formatter() {
    let [form, setForm] = useState({
        src: SAMPLE,
        dst: format(SAMPLE)
    });
    const { t } = useTranslation()
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
                <h1 className='h-10 text-2xl font-bold m-2'>{t('XML Formatter')}</h1>
            </div>
            <Box sx={{ p: 1 }} >
                <span>Input</span>
                <TextField label="" fullWidth={true} multiline rows={10} name="src" variant="outlined" size="small" onChange={onChangeHandler} value={form.src} />
            </Box>
            <Box sx={{ p: 1 }} >
                <span>Output</span>
                <TextField label="" fullWidth={true} multiline rows={10} name="dst" variant="outlined" size="small" onChange={onChangeHandler} value={form.dst} />
            </Box>
        </div>
        /* Provide More
        1. 其他网站同类推荐，因为别人可能做的更好
        2. 评论区- 让大家留言推荐更多，或者反馈。 */
    )
}
