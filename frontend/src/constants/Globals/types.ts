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
    logo: string,
    style: string,
    tech: Tech[],
    projectDirection: string,
}

// SectionContent

export interface SectionContentInterface {
    About: SectionDetails;
    Project: SectionDetails;
  }
  
  export interface SectionDetails {
    title: string;
    paragraph: string;
    btnText: string;
  }
