
def serialize_site_to_compact(site):
    """Serializes a Site object to a compact site for returning to the frontend.

    Args:
      site - An instance of a Site.

    Returns:
      A compact site.
    """
    return {
        'name': site['name'],
        'url': site['url'],
        'accessibility_score': site['report']['accessibility_score'],
        'best_practices_score': site['report']['best_practices_score'],
        'performance_score': site['report']['performance_score'],
        'pwa_score': site['report']['pwa_score'],
        'seo_score': site['report']['seo_score'],
    }
