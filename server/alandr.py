from bottle import route, run, view, request, static_file, get
import yaml
import json


def read_data(file_key='alandr'):
    try:
        with open('server/data/%s.yml' % file_key, 'r') as stream:
            return yaml.load(stream)[file_key]
    except FileNotFoundError:
        with open('server/data/%s.default.yml' % file_key, 'r') as stream:
            return yaml.load(stream)[file_key]


def write_data(new_data, file_key='alandr'):
    with open('server/data/%s.yml' % file_key, 'w') as outfile:
        yaml.dump(new_data, outfile, default_flow_style=False)


@route('/')
@route('/index.html')
@view('www/build/index')
def index():
    return dict(data=data)


# Static Routes
@get('/<filepath:re:.*\.(css|js)>')
def css(filepath):
    return static_file(filepath, root='www/build')


@route('/api/data/items', method='POST')
def api_data_items_post():
    form_settings = json.load(request.body)

    items = json.load(request.body)['items']
    data['items'] = items
    write_data({
        'alandr': data
    })


if __name__ == '__main__':
    data = read_data()

    run(host='localhost', port=8080, reloader=True, debug=True)
