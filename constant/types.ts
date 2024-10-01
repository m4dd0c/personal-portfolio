export interface HandlesInterface {
  title: string;
  link: string;
}

export interface WorkDataInterface {
  id: string;
  title: string;
  link: string;
  desc: string;
  preview?: string;
}
export interface IsDesktopClientInterface {
  isDesktopClient?: boolean;
}

export interface HomeLinkInterface {
  from: string;
  to: string;
  isDesktopClient?: boolean;
}
