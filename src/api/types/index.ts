interface HeaderLink {
  title: string
  link: string
}

export interface Header {
  id: string
  attributes: {
    createdAt: string
    updatedAt: string
    logo: string
    links: HeaderLink[]
  }
}
