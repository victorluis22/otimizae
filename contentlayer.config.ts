// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex"

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ 
    contentDirPath: 'posts', 
    documentTypes: [Post], 
    mdx: {
        rehypePlugins: [rehypeKatex],
        remarkPlugins: [remarkMath]
    } 
})