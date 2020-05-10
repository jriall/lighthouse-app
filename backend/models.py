class Client(object):
    def __init__(self, name):
        self.name = name

    @staticmethod
    def from_dict(dict):
        return Client(name=dict['name'])

    def to_dict(self):
        return {'name': self.name}

    def __repr__(self):
        return(f'Client(name={self.name}')
