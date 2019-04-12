import { createEndPointUrl } from './const';

export const fetchSectionData = (section: string) => fetch(`${createEndPointUrl(section.toLocaleLowerCase())}`);