interface HandlesInterface {
  title: string;
  link: string;
}

interface WorkDataInterface {
  id: string;
  title: string;
  link: string;
  desc: string;
  preview?: string;
}
interface IsDesktopClientInterface {
  isDesktopClient?: boolean;
}

interface HomeLinkInterface {
  from: string;
  to: string;
  isDesktopClient?: boolean;
}

type TActive = boolean | null;
