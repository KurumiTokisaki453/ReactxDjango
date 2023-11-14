import './funciones.css'

function Card() {

  return (
    <>
      <div class="h-screen bg-blue-100 flex items-center justify-center gap-10">
        <div class="card">
          <img
          class="w-full h-full object-cover"
          src="./src/imagenes/Nier-Automata-Background.jpg"
          alt="Nier-Automata-Background"/>

          <div class="p-5 flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <span class="badge">stock ready</span>
              <span class="badge">official store</span>
            </div>

            <h2 class="product-title"
            title='Best Brackground Fond'>
              Mejor Fondo de Pantalla
            </h2>

            <div>
              <span class="text-xl font-bold">
                Rp 400.000
              </span>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-sm line-through opacity-50">
                  Rp 500.000
                </span>
                <span class="discount-percent">
                  save 20%
                </span>
              </div>
            </div>

            <span class="flex items-center mt-1">
              <img src="./src/assets/star-icon.svg"/>
              <img src="./src/assets/star-icon.svg"/>
              <img src="./src/assets/star-icon.svg"/>
              <img src="./src/assets/star-icon.svg"/>
              <img src="./src/assets/star-icon.svg"/>
              <span class="text-cs ml-2 text-gray-500">
                20k reviews
              </span>
            </span>

            <div class="mt-5 flex gap-2">
              <button class="button-primary">
                Add to cart
              </button>
              <button class="button-icon">
                <img
                class="opacity-50"
                src="./src/assets/love.svg"
                alt="Añadir a lista de deseos"/>
              </button>
              <button class="button-icon">
                <img
                class="opacity-50"
                src="./src/assets/eye.svg"
                alt="Añadir a lista de deseos"/>
              </button>
            </div>
            


          </div>
        </div>


      </div>
    </>
  )
}

export default Card
