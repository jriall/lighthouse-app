class Client(object):
    """Defines a client to be associated with a particular site."""

    def __init__(self, name):
        self.name = name

    @staticmethod
    def from_dict(dict):
        return Client(name=dict['name'])

    def to_dict(self):
        return {'name': self.name}

    def __repr__(self):
        return(f'Client(name={self.name}')


class User(object):
    """Defines a user of the application."""

    def __init__(self, name, email):
        self.name = name
        self.email = email

    @staticmethod
    def from_dict(dict):
        return User(name=dict['name'], email=dict['email'])

    def to_dict(self):
        return {'name': self.name, 'email': self.email}

    def __repr__(self):
        return(f'User(name={self.name}, email={self.email}')
