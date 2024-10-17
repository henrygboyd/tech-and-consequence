import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleDesc: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const desc = fileData.frontmatter?.description
  if (desc) {
    return <p class={classNames(displayClass, "article-desc")}>{desc}</p>
  } else {
    return null
  }
}

ArticleDesc.css = `
.article-desc {
  margin: .5rem 0 .5rem 0;
    margin-left: auto;
    margin-right: auto;
}
`

export default (() => ArticleDesc) satisfies QuartzComponentConstructor
