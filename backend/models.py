from google.cloud import ndb


class Client(ndb.Model):
    name = ndb.StringProperty()


class User(ndb.Model):
    """Defines a user of the application."""
    is_admin = ndb.BooleanProperty()
    name = ndb.StringProperty()
    email = ndb.StringProperty()


class Site(object):
    """Defines a site."""

    def __init__(self, name, url, report):
        self.name = name
        self.url = url
        self.report = report

    @staticmethod
    def from_dict(dict):
        return Site(name=dict['name'], url=dict['url'], report=dict['report'])

    def to_dict(self):
        return {'name': self.name, 'url': self.url, 'report': self.report.to_dict()}

    def __repr__(self):
        return(f'Site(name={self.name}, url={self.url}, report={self.report.to_dict()})')


class ReportResults(object):
    """Defines the results of an individual report run on a site."""

    def __init__(self, accessibility_score, best_practices_score,
                 performance_score, pwa_score, seo_score):
        self.accessibility_score = accessibility_score
        self.best_practices_score = best_practices_score
        self.performance_score = performance_score
        self.pwa_score = pwa_score
        self.seo_score = seo_score

    @staticmethod
    def from_dict(dict):
        return ReportResults(
            accessibility_score=dict['accessibility_score'],
            best_practices_score=dict['best_practices_score'],
            performance_score=dict['performance_score'],
            pwa_score=dict['pwa_score'],
            seo_score=dict['seo_score'],
        )

    def to_dict(self):
        return {
            'accessibility_score': self.accessibility_score,
            'best_practices_score': self.best_practices_score,
            'performance_score': self.performance_score,
            'pwa_score': self.pwa_score,
            'seo_score': self.seo_score,
        }

    def __repr__(self):
        return(f'ReportResults(' +
               f'accessibility_score={self.accessibility_score}, ' +
               f'best_practices_score={self.best_practices_score}, ' +
               f'performance_score={self.performance_score}, ' +
               f'pwa_score={self.pwa_score}, ' +
               f'seo_score={self.seo_score})')
