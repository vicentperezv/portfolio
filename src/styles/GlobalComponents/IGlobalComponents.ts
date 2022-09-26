export interface ISection {
    main?: boolean,
    row? : boolean,
    grid?: boolean,
    nopadding? : boolean,
};

export interface ISectionDivider{
    colorAlt?: boolean,
    divider? : boolean,
};

export interface IButton{
    alt: boolean,
    form : boolean,
    disabled: boolean,
};
export interface IButtonFront{
    alt: boolean,    
    disabled: boolean,
};

export interface ILinkContainer{
    large: boolean,
}

export interface ILinkIconImg{
    large: boolean,
    nav : boolean,
}