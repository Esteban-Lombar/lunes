import { Link } from "react-router-dom"

function Hero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-10">

        {/* TEXTO */}
        <div className="z-10">

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Inteligencia Artificial + YOLOv8
          </span>

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900 mt-6">
            Reconocimiento inteligente de EPP en tiempo real
          </h1>

          <p className="text-gray-600 mt-6 text-xl leading-relaxed">
            Plataforma desarrollada con visión computacional capaz de identificar
            elementos de protección personal mediante cámara web o imágenes.
          </p>

          <div className="flex gap-5 mt-10">

            <Link to="/detector">

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg transition duration-300 shadow-xl hover:scale-105">

                Ingresar al sistema

              </button>

            </Link>

            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl text-lg transition">

              Más información

            </button>

          </div>

        </div>

        {/* IMAGEN */}
        <div className="relative">

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
            alt="EPP"
            className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover relative z-10"
          />

        </div>

      </div>

    </section>

  )
}

export default Hero