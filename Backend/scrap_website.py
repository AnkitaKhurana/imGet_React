import image_scraper


import subprocess
import shlex


list_of_links = ['https://www.morazzia.com/','http://snapchat-nude-selfies.tumblr.com/','https://snapnsfw.com/tags/snapchat-nude/','http://www.kindgirls.com/','https://nude-gals.com/','https://www.voyeurweb.com/contributions/private-shots-photos','http://www.freexcafe.com/','https://www.domerotica.com/','http://www.eroticbeauties.net/']

for link in list_of_links:
    subprocess.call(shlex.split('image-scraper -s unknown_images -m 10 ' + link ))



