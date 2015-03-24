from pprint import pprint
from urllib.request import urlretrieve
import json
import logging
import pycountry

logger = logging.getLogger(__name__)

alpha3to2 = {country.alpha3.lower(): country.alpha2.lower() for country in pycountry.countries}
alpha3to2['eur'] = 'eu'


def main():
    with open('flag_source.json') as data_file:
        flags = json.load(data_file)

        pprint(flags)

        for code, url in flags.items():
            if url:
                logging.info('Downloading {}'.format(code))
                urlretrieve(url, 'flags/{}.svg'.format(code))

    with open('css/flag-countries.css', 'w') as file:
        for code, url in flags.items():
            if url:
                file.write((
                    '.flag-{alpha3}, .flag-{alpha2} {{\n'
                    '  background-image: url(../flags/{alpha3}.svg);\n'
                    '}}\n'.format(alpha3=code, alpha2=alpha3to2[code])
                ))

    with open('index.html', 'w') as file:
        file.write('''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>flag-css</title>
    <link href="./css/flag-core.css" rel="stylesheet">
    <link href="./css/flag-countries.css" rel="stylesheet">
  </head>
  <body>
    <div>
''')

        for code, url in flags.items():
            if url:
                file.write('      <span class="flag flag-{}"></span>\n'.format(code))

        file.write('''    </div>
  </body>
</html>''')

if __name__ == '__main__':
    main()
