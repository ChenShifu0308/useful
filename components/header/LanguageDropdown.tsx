import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';

// 用https://ant.design/components/dropdown-cn 
export default function LanguageDropdown() {
  const [language, setLanguage] = useState<Language>(Language.English)

  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Switch to ${key}`);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: "English",
    },
    {
      key: '2',
      label: "简体中文",
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items, onClick }} placement="bottom">
        <button
          onClick={() => {

          }}
          className='hover:bg-gray-200 dark:hover:bg-gray-800 px-2
            transition-all duration-100  mx-4 rounded-lg w-30 h-8 border-slate-500 border'>
          {language}
        </button>
      </Dropdown>
    </div >

  )
}

enum Language {
  English = "English",
  Chinese = "简体中文",
}