export interface CompactSite {
  name: string;
  url: string;
}

export interface SiteListApiResponse {
  siteList: CompactSite[];
}
