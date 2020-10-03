from django.test import TestCase
import inspect
from apps.ml.registry import MLRegistry
from apps.ml.income_classifier.random_forest import RandomForestClassifier
from apps.ml.playstyle_classifier.kmeans import KMeansClassifier
from apps.ml.playstyle_classifier.nnclassifier import NNClassifier

class MLTests(TestCase):
    # def test_rf_algorithm(self):
    #     input_data = {
    #         "age": 37,
    #         "workclass": "Private",
    #         "fnlwgt": 34146,
    #         "education": "HS-grad",
    #         "education-num": 9,
    #         "marital-status": "Married-civ-spouse",
    #         "occupation": "Craft-repair",
    #         "relationship": "Husband",
    #         "race": "White",
    #         "sex": "Male",
    #         "capital-gain": 0,
    #         "capital-loss": 0,
    #         "hours-per-week": 68,
    #         "native-country": "United-States"
    #     }
    #     my_alg = RandomForestClassifier()
    #     response = my_alg.compute_prediction(input_data)
    #     self.assertEqual('OK', response['status'])
    #     self.assertTrue('label' in response)
    #     self.assertEqual('<=50K', response['label'])

    # def test_registry(self):
    #     registry = MLRegistry()
    #     self.assertEqual(len(registry.endpoints), 0)
    #     endpoint_name = "income_classifier"
    #     algorithm_object = RandomForestClassifier()
    #     algorithm_name = "random forest"
    #     algorithm_status = "production"
    #     algorithm_version = "0.0.1"
    #     algorithm_owner = "Harry"
    #     algorithm_description = "Random Forest with simple pre- and post-processing"
    #     algorithm_code = inspect.getsource(RandomForestClassifier)
    #     # add to registry
    #     registry.add_algorithm(endpoint_name, algorithm_object, algorithm_name,
    #                 algorithm_status, algorithm_version, algorithm_owner,
    #                 algorithm_description, algorithm_code)
    #     # there should be one endpoint available
    #     self.assertEqual(len(registry.endpoints), 1)

    # def test_kmeans_algorithm(self):
    #     input_data = {
    #         'rated': True,
    #         'turns': 40,
    #         'victory_status': 'outoftime',
    #         'winner': 'white',
    #         'increment_code': '15+2',
    #         'white_rating': 1300,
    #         'black_rating': 2000,
    #         'opening_eco': 'B00',
    #         'opening_ply': 5
    #     }
    #     my_alg = RandomForestClassifier()
    #     response = my_alg.compute_prediction(input_data)
    #     print(response)

    def test_nnclassifier_algorithm(self):
        input_data = 'aquaticpineapples'
        my_alg = NNClassifier()
        response = my_alg.compute_prediction(input_data)
        print(response)