import joblib
import pandas as pd

class KMeansClassifier:
    def __init__(self):
        path = "../../research/"
        self.encoders = joblib.load(path + "encoders-chess.joblib")
        self.model = joblib.load(path + "kmeans.joblib")
    
    def preprocessing(self, input_data):
        input_data = pd.DataFrame(input_data, index=[0])
        for column in [
            'rated', 'victory_status', 'winner', 'increment_code', 'opening_eco'
        ]:
            categorical_convert = self.encoders[column]
            input_data[column] = categorical_convert.transform(input_data[column])
        
        return input_data

    def predict(self, input_data):
        return self.model.fit_predict(input_data)[0]

    def postprocessing(self, input_data):
        return input_data[0]

    def compute_prediction(self, input_data):
        try:
            input_data = self.preprocessing(input_data)
            prediction = self.predict(input_data)
        except Exception as e:
            return {"status": "Error", "message": str(e)}

        return prediction