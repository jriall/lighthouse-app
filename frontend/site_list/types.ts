export interface CompactSite {
  name: string;
  url: string;
  accessibility_score: number;
  best_practices_score: number;
  mobile_performance_score: number;
  desktop_performance_score: number;
  pwa_score: number;
  seo_score: number;
}

export interface SiteListApiResponse {
  siteList: CompactSite[];
}
