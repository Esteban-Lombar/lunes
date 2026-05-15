from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# =========================
# CARGAR MODELO
# =========================
model = YOLO("best.pt")


# =========================
# RUTA PRINCIPAL
# =========================
@app.route('/predict', methods=['POST'])
def predict():

    try:

        # =========================
        # RECIBIR IMAGEN
        # =========================
        file = request.files['image']

        image_bytes = file.read()

        image = Image.open(
            io.BytesIO(image_bytes)
        )

        # =========================
        # PREDICCIÓN
        # =========================
        results = model(image)

        # =========================
        # OBTENER PROBABILIDADES
        # =========================
        probs = results[0].probs.data.tolist()

        resultados = []

        for i, prob in enumerate(probs):

            resultados.append({

                "clase": model.names[i],

                "confianza": round(
                    prob * 100,
                    2
                )

            })

        # =========================
        # ORDENAR RESULTADOS
        # =========================
        resultados = sorted(
            resultados,
            key=lambda x: x["confianza"],
            reverse=True
        )

        # =========================
        # RESPUESTA JSON
        # =========================
        return jsonify({

            "resultados": resultados

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        })


# =========================
# EJECUTAR SERVIDOR
# =========================
if __name__ == '__main__':

    app.run(debug=True)