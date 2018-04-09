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


@route('/')
@route('/index.html')
@view('www/build/index')
def index():
    return dict(data=data)


# Static Routes
@get('/<filepath:re:.*\.(css|js)>')
def css(filepath):
    return static_file(filepath, root='www/build')


@route('/api/data', method='POST')
def api_data():
    form_settings = json.load(request.body)

    new_settings = {}
    for from_setting in form_settings:
        new_settings[from_setting['name']] = from_setting['value']

    settings.update(new_settings)

    with open('data/settings.yml', 'w') as outfile:
        yaml.dump({'settings': settings}, outfile, default_flow_style=False)


if __name__ == '__main__':
    data = read_data()

    run(host='localhost', port=8080, reloader=True, debug=True)
