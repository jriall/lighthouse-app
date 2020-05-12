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
        api_url = construct_api_request_url(url)
        response = requests.get(api_url)
        return response.json()


def construct_api_request_url(url):
    """Constructs the URL to send a request to the Page Speed Insights API.

    Args:
      url - The URL the tool should be run on.

    Returns:
      The final URL to make the Page Speed Insights API request.
    """
    category_params = ''.join(
        [f'&category={category}' for category in CATEGORIES])
    return ''.join([API_BASE_URL, '?url=', url,
                    category_params, '&key=', PAGE_SPEED_INSIGHTS_API_KEY])
