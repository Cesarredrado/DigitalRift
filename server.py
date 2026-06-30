import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse
from uuid import uuid4

DATA_FILE = os.environ.get('R_AND_P_DATA_FILE', 'points.json')


def load_points():
    if not os.path.exists(DATA_FILE):
        return []
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as handle:
            data = json.load(handle)
            return data if isinstance(data, list) else []
    except (ValueError, OSError):
        return []


def save_points(points):
    with open(DATA_FILE, 'w', encoding='utf-8') as handle:
        json.dump(points, handle, ensure_ascii=False, indent=2)


def add_point(point):
    points = load_points()
    new_point = dict(point)
    new_point.setdefault('id', str(uuid4()))
    points.append(new_point)
    save_points(points)
    return new_point


class PointsHandler(BaseHTTPRequestHandler):
    def _send_json(self, payload, status=200):
        body = json.dumps(payload).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send_json({'ok': True}, 200)

    def do_GET(self):
        if self.path.startswith('/points'):
            self._send_json(load_points())
            return
        self._send_json({'ok': True})

    def do_POST(self):
        if not self.path.startswith('/points'):
            self._send_json({'error': 'Not found'}, 404)
            return
        length = int(self.headers.get('Content-Length', 0))
        raw = self.rfile.read(length).decode('utf-8')
        try:
            payload = json.loads(raw) if raw else {}
        except json.JSONDecodeError:
            payload = parse_qs(raw)
            payload = {k: v[0] if len(v) == 1 else v for k, v in payload.items()}
        point = add_point(payload)
        self._send_json(point, 201)


def run_server(host='127.0.0.1', port=8001):
    server = ThreadingHTTPServer((host, port), PointsHandler)
    print(f'Serving on http://{host}:{port}')
    server.serve_forever()


if __name__ == '__main__':
    run_server()
