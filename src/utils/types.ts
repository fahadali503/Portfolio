export interface ICategory {
    id: string;
    title: string
}

export interface IBlog {
    title: string;
    id: string;
    body: {
        html: string;
    };
    createdAt: string;
    categories: ICategory[];
    slug: string;
    coverImage: {
        id: string;
        url: string
    };
    readtime: string
}