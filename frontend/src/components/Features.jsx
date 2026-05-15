function Features() {

  return (

    <section className="bg-gray-100 py-24 px-10">

      <div className="max-w-7xl mx-auto">

        {/* TITULO */}

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Características del sistema
          </h2>

          <p className="text-gray-500 text-xl mt-6">
            Tecnología moderna aplicada al reconocimiento inteligente de EPP.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* CARD 1 */}

          <div className="bg-white p-10 rounded-[30px] shadow-xl hover:-translate-y-3 transition duration-300 border border-gray-100">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              🤖
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              IA + YOLOv8
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Sistema entrenado mediante Deep Learning para clasificación automática de EPP.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-white p-10 rounded-[30px] shadow-xl hover:-translate-y-3 transition duration-300 border border-gray-100">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              📸
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              Tiempo Real
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Reconocimiento inmediato mediante cámara web y análisis inteligente.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-white p-10 rounded-[30px] shadow-xl hover:-translate-y-3 transition duration-300 border border-gray-100">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              🦺
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              Seguridad Industrial
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Identificación automática de casco, botas, gafas, guantes y más.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Features