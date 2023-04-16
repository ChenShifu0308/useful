## Todos
- 切换到next-i18next支持多语言
- 侧边栏通过json进行配置
    - 页面对象： key,name,到多语言的映射，搜索关键字，页面类型(功能页，markdown，或者其他网站链接的列表)
    - 侧边栏items树
- 加入router支持点击侧边栏后显示对应的工具
- 小屏幕通过抽屉页展示sidebar
- 支持侧边栏搜索


### Object Definition 
```json
// page item
 {
    "key": "xml_formatter", // 页面唯一key，和sidebar "key" 对应，同时也是router的路径
    "name": "XML Formatter", // 显示名，支持多语言
    "search": "xml formatter", //搜索关键字
    "type": "function" // 页面类型: function, links, markdown
}

// side bar item
{
    "label": "Formatters", // 显示名，支持多语言
    "key": "formatters", // key for item
    "children": [ // 子item
        {
            "label": "Json",
            "key": "json_formatter"  //页面对象的key, 同时也是router的路径
        }
    ]
}
```



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
