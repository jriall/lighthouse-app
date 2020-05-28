import requests

from settings import PAGE_SPEED_INSIGHTS_API_KEY


API_BASE_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

# The categories we wish to be assessed by Page Speed Insights. If left blank,
# this will default to performance only.
CATEGORIES = ['accessibility', 'best-practices', 'performance', 'pwa', 'seo']


class PageSpeedInights():
    """A client for making requests to the Page Speed API."""

    @classmethod
    def run(cls, url):
        """Run the Page Speed Insights tool for a specific URL.

        Args:
          url - The URL the tool should be run on.
        """
        desktop_api_url = construct_api_request_url(url)
        desktop_report = requests.get(desktop_api_url)
        mobile_api_url = construct_api_request_url(
            url=url, test_mobile=True)
        mobile_report = requests.get(mobile_api_url)
        return serialize_page_speed_insights_response(desktop_report.json(), mobile_report.json())


def serialize_page_speed_insights_response(desktop_report, mobile_report):
    """Serializes a Page Speed Insights API response into the desired format.

     Args:
       response - The raw response from the Page Speed Insights API.

     Returns:
       An instance of the ReportResults class.
     """
    desktop_categories = desktop_report['lighthouseResult']['categories']
    mobile_categories = mobile_report['lighthouseResult']['categories']

    serialized_results = {
        'mobile_performance_score': mobile_categories['performance']['score'],
        'desktop_performance_score': desktop_categories['performance']['score'],
        'best_practices_score': desktop_categories['best-practices']['score'],
        'pwa_score': desktop_categories['pwa']['score'],
        'seo_score': desktop_categories['seo']['score'],
        'accessibility_score': desktop_categories['accessibility']['score'],
    }

    return serialized_results


def construct_api_request_url(url, test_mobile=False):
    """Constructs the URL to send a request to the Page Speed Insights API.

    Args:
      url - The URL the tool should be run on.
      test_mobile - Whether the API should be constructed using mobile or
          desktop strategy.

    Returns:
      The final URL to make the Page Speed Insights API request.
    """
    category_params = ''.join(
        [f'&category={category}' for category in CATEGORIES])
    return ''.join([API_BASE_URL, '?url=', url,
                    category_params, '&key=', PAGE_SPEED_INSIGHTS_API_KEY, '&strategy=mobile' if test_mobile else ''])
