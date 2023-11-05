export interface CategoryProps {
    category: string,
    pages: Array<PageProps>
}

export interface PageProps {
    url: string,
    page: string
}