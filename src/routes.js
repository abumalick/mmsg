import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageSidebar from "./layouts/PageSidebar"
import Homepage from "./layouts/Homepage"
import Horaires from "./layouts/Horaires"
import Fonctionnement from "./layouts/Fonctionnement"
import Formulaire from "./layouts/Formulaire"
import Nouveautes from "./layouts/Nouveautes"
import Services from "./layouts/Services"
import Service from "./layouts/Service"
import Contact from "./layouts/Contact"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      PageSidebar,
      Homepage,
      Horaires,
      Fonctionnement,
      Formulaire,
      Nouveautes,
      Services,
      Service,
      Contact,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
