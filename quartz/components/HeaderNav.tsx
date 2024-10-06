import { QuartzComponentConstructor } from "./types"
import style from "./styles/HeaderNav.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="links-header-container">
        <div id="links-header">        
            <a href="/index">Home</a>    
            <a href="/tags/news/">News</a>    
            <a href="/tags/culture/">Culture</a>     
            <a href="/tags/policy">Policy</a>
            <a href="/About/">About</a>
        </div>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor