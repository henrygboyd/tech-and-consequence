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
            <a href="/guides/">News</a>    
            <a href="/modding-tools/">Culture</a>     
            <a href="https://tes3cs-manual.vercel.app/">Policy</a>
            <a href="/About/">About</a>
        </div>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor