import urllib.request, json
url='https://olkvzgtxzecjevxlxtbr.supabase.co/rest/v1/points?select=*'
req=urllib.request.Request(url, headers={'apikey':'sb_publishable_VsOs852tqG484znrcays3w_-piYuk_j','Authorization':'Bearer sb_publishable_VsOs852tqG484znrcays3w_-piYuk_j','Content-Type':'application/json','Prefer':'return=representation'})
with urllib.request.urlopen(req) as r:
    data=json.load(r)
print('TOTAL', len(data))
for i,p in enumerate(data):
    print(i, '|', p.get('title'), '|', (p.get('description') or '')[:180], '|', p.get('id'))
