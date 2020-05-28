from google.cloud import ndb


class Client(ndb.Model):
    name = ndb.StringProperty()


class User(ndb.Model):
    """Defines a user of the application."""
    is_admin = ndb.BooleanProperty()
    name = ndb.StringProperty()
    email = ndb.StringProperty()


class Site(ndb.Model):
    """Defines a site."""
    name = ndb.StringProperty()
    url = ndb.StringProperty()
    created_by = ndb.KeyProperty(kind=User)
    last_edited_by = ndb.KeyProperty(kind=User)
    created_on = ndb.DateTimeProperty(auto_now_add=True)
    last_modified_on = ndb.DateTimeProperty(auto_now=True)

    @classmethod
    def to_compact(cls, site):
        return {
            'name': site.name,
            'url': site.url,
            'id': site.key.urlsafe().decode('utf-8'),
        }


class Report(ndb.Model):
    """Defines a report for a given site."""
    site = ndb.KeyProperty(kind=Site)
    created_on = ndb.DateTimeProperty(auto_now_add=True)
    accessibility_score = ndb.FloatProperty()
    best_practices_score = ndb.FloatProperty()
    desktop_performance_score = ndb.FloatProperty()
    mobile_performance_score = ndb.FloatProperty()
    pwa_score = ndb.FloatProperty()
    seo_score = ndb.FloatProperty()

    @classmethod
    def to_dict(cls, report):
        return {
            'accessibility_score': report.accessibility_score,
            'best_practices_score': report.best_practices_score,
            'desktop_performance_score': report.desktop_performance_score,
            'mobile_performance_score': report.mobile_performance_score,
            'seo_score': report.seo_score,
            'pwa_score': report.pwa_score,
        }
