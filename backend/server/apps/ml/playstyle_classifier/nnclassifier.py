import pandas as pd
import numpy as np
from tensorflow.keras.models import model_from_json
from sklearn.preprocessing import StandardScaler
import requests
import chess.pgn
import io

class NNClassifier:
    def __init__(self):
        path = "../../research/"
        # load json and create model
        file = open(path + 'neuralnet.json', 'r')
        model_json = file.read()
        file.close()
        self.loaded_model = model_from_json(model_json)
        # load weights
        self.loaded_model.load_weights(path + 'model.h5')
    
    def preprocessing(self, input_data):

        player = input_data['player']
        
        url = 'https://lichess.org/api/games/user/' + player + '?max=100&pgnInJson=TRUE'
        response = requests.get(url)
        print(response.status_code)
        pgn = io.StringIO(response.text)
        games = []
        for x in range(0, 100):
            games.append(chess.pgn.read_game(pgn))

        move_count = [game.end().board().fullmove_number for game in games]
        result_to_int = {'0-1': 0, '1-0': 1, '1/2-1/2': 0.5}
        opening = [int(game.headers['ECO'][1:]) if game.headers['ECO'] != '?' else 0 for game in games]
        white_rating_diff = [int(game.headers['WhiteRatingDiff']) if 'WhiteRatingDiff' in game.headers else 0 for game in games]
        black_rating_diff = [int(game.headers['BlackRatingDiff']) if 'BlackRatingDiff' in game.headers else 0 for game in games]
        elo_diff = [int(game.headers['WhiteElo']) - int(game.headers['BlackElo']) if 'BlackElo' in game.headers and 'WhiteElo' in game.headers else 0 for game in games]
        time_control = [int(game.headers['TimeControl'].split('+')[0]) if 'TimeControl' in game.headers else 0 for game in games]
        result = [result_to_int[game.headers['Result']] for game in games]
        d = {'move_count': move_count, 'opening': opening, 'time_control': time_control, 'result': result, 'elo_diff': elo_diff, 'white_rating_diff': white_rating_diff, 'black_rating_diff': black_rating_diff}
        df = pd.DataFrame(d)
        sc = StandardScaler()
        X = df.iloc[:,:7].values
        X = sc.fit_transform(X)
        
        return X

    def predict(self, input_data):
        predictions = self.loaded_model.predict(input_data)
        return np.argmax(predictions, axis=1)[0]

    def postprocessing(self, input_data):
        switcher = {
            0: "Magnus Carlsen",
            1: "Andrew Tang",
            2: "Vladislav Artemiev",
            3: "Alireza Firouzja",
            4: "Nihal Sarin",
            5: "Anish Giri",
            6: "Fabiano Caruana",
            7: "Andrey Esipenko",
        }
        return {"player": switcher.get(input_data, "invalid player"), "status": "OK"}

    def compute_prediction(self, input_data):
        try:
            input_data = self.preprocessing(input_data)
            prediction = self.predict(input_data)
            prediction = self.postprocessing(prediction)
        except Exception as e:
            return {"status": "Error", "message": str(e)}

        return prediction