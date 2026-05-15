import { useEffect, useRef, useState } from "react"
import axios from "axios"

function Detector() {

  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const [resultados, setResultados] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    iniciarCamara()
  }, [])

  const iniciarCamara = async () => {

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    })

    videoRef.current.srcObject = stream
  }

  const analizarImagen = async () => {

    setLoading(true)

    const canvas = canvasRef.current
    const video = videoRef.current

    const context = canvas.getContext("2d")

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    context.drawImage(video, 0, 0)

    const image = canvas.toDataURL("image/jpeg")

    const blob = await fetch(image).then(r => r.blob())

    const formData = new FormData()

    formData.append("image", blob, "foto.jpg")

    try {

      const response = await axios.post(
        "https://ojos-digitales-backend.onrender.com/predict",
        formData
      )

      console.log(response.data)

      setResultados(response.data.resultados)

    } catch (error) {

      console.log(error)

      setResultado("Error al analizar")

    }

    setLoading(false)
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-950 flex items-center justify-center p-10">

      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* CAMARA */}

          <div className="p-10">

            <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full w-fit font-semibold">
              YOLOv8 + IA
            </div>

            <h1 className="text-5xl font-bold text-white mt-6 leading-tight">
              Detector inteligente de EPP
            </h1>

            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Sistema basado en visión computacional para identificar
              elementos de protección personal en tiempo real.
            </p>

            {/* VIDEO */}

            <div className="mt-10 rounded-[30px] overflow-hidden border-4 border-orange-500 shadow-2xl">

              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-[500px] object-cover"
              ></video>

            </div>

            <canvas
              ref={canvasRef}
              style={{ display: "none" }}
            ></canvas>

          </div>

          {/* RESULTADOS */}

          <div className="bg-white p-10 flex flex-col justify-center">

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Resultado del análisis
            </h2>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              El sistema analiza automáticamente la imagen capturada
              mediante Inteligencia Artificial.
            </p>

            {/* RESULTADO */}

            <div className="mt-10 bg-gray-100 rounded-[30px] p-10 shadow-inner">

              <h3 className="text-2xl font-bold text-gray-800">
                Predicción
              </h3>

              <div className="space-y-3 mt-4">

  {resultados.map((item, index) => (

    <div
      key={index}
      className="bg-gray-800 p-3 rounded-xl"
    >

      <div className="flex justify-between">

        <span className="font-semibold">
          {item.clase}
        </span>

        <span>
          {item.confianza}%
        </span>

      </div>

      <div className="w-full bg-gray-700 rounded-full h-3 mt-2">

        <div
          className="bg-cyan-400 h-3 rounded-full"
          style={{
            width: `${item.confianza}%`
          }}
        ></div>

      </div>

    </div>

  ))}

</div>

            </div>

            {/* BOTON */}

            <button
              onClick={analizarImagen}
              disabled={loading}
              className="mt-10 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-5 rounded-2xl text-xl font-bold transition duration-300 shadow-xl hover:scale-105"
            >

              {
                loading
                  ? "Analizando..."
                  : "Analizar Imagen"
              }

            </button>

            {/* INFO */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-gray-100 p-6 rounded-2xl">

                <h4 className="text-3xl font-bold text-orange-500">
                  94%
                </h4>

                <p className="text-gray-500 mt-2">
                  Precisión
                </p>

              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">

                <h4 className="text-3xl font-bold text-orange-500">
                  7
                </h4>

                <p className="text-gray-500 mt-2">
                  Clases EPP
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Detector