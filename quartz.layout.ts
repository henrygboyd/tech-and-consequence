import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Darkmode(), Component.HeaderNav(),
     Component.Search(),],
  afterBody: [Component.Breadcrumbs(), Component.ButtondownSubscribe(),],
  footer: Component.Footer({
    links: {

    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [Component.PageTitle(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.Graph()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.Graph(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
  ],
  right: [],
}
