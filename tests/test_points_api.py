import os
import tempfile
import unittest

from server import add_point, load_points


class PointsApiTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.data_path = os.path.join(self.temp_dir.name, 'points.json')
        os.environ['R_AND_P_DATA_FILE'] = self.data_path

    def tearDown(self):
        self.temp_dir.cleanup()
        os.environ.pop('R_AND_P_DATA_FILE', None)

    def test_load_points_returns_empty_list_when_file_missing(self):
        self.assertEqual(load_points(), [])

    def test_add_point_persists_point(self):
        point = {
            'title': 'Shared memory',
            'description': 'Saved remotely',
            'category': 'story',
            'lat': 10.5,
            'lng': 20.5,
            'author': 'R&P',
            'mediaType': 'text',
            'mediaValue': ''
        }

        saved = add_point(point)
        self.assertEqual(saved['title'], 'Shared memory')
        self.assertTrue(saved['id'])
        self.assertEqual(load_points()[0]['title'], 'Shared memory')


if __name__ == '__main__':
    unittest.main()
