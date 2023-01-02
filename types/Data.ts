export interface Data {
    selected_main_category: string,
    selected_sub_category: string,
    props_values: PropsValues[],
}

 export interface PropsValues {
    [key:string]:string;
}


