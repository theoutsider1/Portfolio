export interface NavLinks {
    id: number,
    name: string,
    href : string
}
export interface Tech {
    id: number,
    name: string,
    href : string
}

export interface ProjectsInfos {
    id: number,
    name: string,
    description: string,
    date: string,
    tech: Tech[],
    projectDirection: string,
}

// SectionContent


  export interface SectionDetails {
    title: string;
    paragraph: string;
    btnText: string;
  }
