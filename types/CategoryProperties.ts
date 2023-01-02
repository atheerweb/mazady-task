interface option {
    id: number | string,
    name: string,
    slug?: string,
    parent?: number,
    child?: boolean,
}

export interface CategoryProperties {
    id: number;
    name: string;
    description: null,
    slug: string;
    parent: null;
    list: boolean;
    type: null,
    value: string;
    other_value: null,
    options:option[]
    optionsChildren?:CategoryProperties[];
    other:string;
}

 

interface ChildrenOptions {
        id: number;
        name: string;
        slug: string;
        parent:number;
        child: boolean
}
    