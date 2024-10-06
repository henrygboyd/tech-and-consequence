import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/ButtondownSubscribe.scss"


export default (() => {
    function ButtondownSubscribe() {
      return    <form
        action="https://buttondown.com/api/emails/embed-subscribe/techandconsequence"
        method="post"
        target="popupwindow"
        onSubmit="window.open('https://buttondown.com/techandconsequence', 'popupwindow')"
        class="embeddable-buttondown-form"
        >
        <input type="email" name="email" id="bd-email" />
        <input type="submit" value="Subscribe" />
        </form>
    }

ButtondownSubscribe.css = style
return ButtondownSubscribe
}) satisfies QuartzComponentConstructor