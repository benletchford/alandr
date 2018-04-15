from bottle import Bottle, route, run, view, request, static_file, get
import yaml
import json
import argparse


class Alandr(Bottle):
    DATA_FILE_NAME = 'alandr'

    def __init__(self, data_directory):
        super(Alandr, self).__init__()

        self.default_data_file = '%s/%s.default.yml' % \
            ('server/data', Alandr.DATA_FILE_NAME)
        self.data_file = '%s/%s.yml' % \
            (data_directory, Alandr.DATA_FILE_NAME)

        self.data = self.read_data()

    def read_data(self):
        try:
            with open(self.data_file, 'r') as stream:
                return yaml.load(stream)

        except FileNotFoundError:
            with open(self.default_data_file, 'r') as stream:

                return yaml.load(stream)

    def write_data(self):
        with open(self.data_file, 'w') as outfile:
            yaml.dump(self.data, outfile, default_flow_style=False)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d',
        '--data-directory',
        default='server/data',
        help='Data directory path'
    )
    parser.add_argument(
        '-H',
        '--host',
        default='localhost',
        help='Host'
    )
    parser.add_argument(
        '-p',
        '--port',
        type=int,
        default=80,
        help='Port'
    )
    parser.add_argument(
        '-D',
        '--debug',
        action='store_true',
        help='Debug'
    )
    parser.add_argument(
        '-R',
        '--reloader',
        action='store_true',
        help='Reloader'
    )
    args = parser.parse_args()

    alandr = Alandr(data_directory=args.data_directory)

    # Main page
    @route('/')
    @route('/index.html')
    @view('www/build/index')
    def index():
        return dict(data=alandr.data, json_data=json.dumps(alandr.data))

    # Static files
    @get('/<filepath:re:.*\\.(css|js|svg|woff2|woff|eot|ttf)>')
    def css(filepath):
        return static_file(filepath, root='www/build')

    # API
    @route('/api/data/<endpoint>', method='POST')
    def api_data_items_post(endpoint):
        alandr.data['alandr'][endpoint] = json.load(request.body)[endpoint]
        alandr.write_data()

    run(
        host=args.host,
        port=args.port,
        reloader=args.reloader,
        debug=args.debug
    )
