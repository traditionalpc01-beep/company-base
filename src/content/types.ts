export type NavItem = {
  label: string;
  to: string;
};

export type LinkItem = {
  label: string;
  to: string;
  external?: boolean;
};

export type FooterSection = {
  title: string;
  items: LinkItem[];
};

export type AddressItem = {
  label: string;
  value: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  addresses: AddressItem[];
};

export type SiteContent = {
  nav: NavItem[];
  footerSections: FooterSection[];
  contact: ContactInfo;
};
