import os
import sys
import json

from zomathon import ZomatoAPI

API_KEY = os.environ.get('bb88941330733f59c47e2d901806d8ea')
zom = ZomatoAPI(API_KEY)


# For complete help on the module
help(zom)
