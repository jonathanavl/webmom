import { Link } from "react-router-dom";
import producto1 from "../assets/img/producto1.png";
import rednoir from "../assets/img/rednoir.png";
import cream from "../assets/img/cream.png";
import pestañas from "../assets/img/pestañas.png";

export const Products = () => {
  return (
    <nav>
      <div className="product">
        <div className="product-text">
          <h2>Set de Micro Dermoabrasión Plus TimeWise®</h2>

          <h6>Micro-Dermoabrasión Refinar TimeWise®:</h6>
          <p>Con cristales exfoliantes que energizan inmediatamente la piel y le dan un aspecto radiante y saludable.</p>

          <h6>Minimizador de Poros TimeWise®:</h6>
          <p>Nutre la piel dejando una sensación suave después de usar la Micro-Dermoabrasión Refinar, disminuyendo de forma clara la apariencia de los poros.</p>

          <small>
            Libre de aceites y de fragancia. <br />
            Clínicamente probado contra irritaciones de la piel y alergias. <br />
            No comedogénico (no obstruye los poros).
          </small>
          <small>Precio de venta al público: 72,50 €</small>
        </div>

        <img className="product-image" src={producto1} alt="Set de Micro Dermoabrasión" />
      </div>

      <br />

      <div className="product">
        <img
          className="product-image"
          src="https://www.marykay.es/-/media/images/mk/europe/spain/esuite/about-mary-kay/notas-prensa/2023/desmaquillador-de-ojos_con-caja.png?la=es-es&h=450&w=300&hash=72337A314BCDE1704C10BA6E185A99BCA6DDDEB9"
          alt="Desmaquillador de Ojos Mary Kay®"
        />
        <div className="product-text">
          <h2>Desmaquillador de Ojos Mary Kay®</h2>
          <h6>Con solo agitar y deslizar, limpia incluso el maquillaje de ojos más intenso en una sola pasada.</h6>
          <p>
            Mary Kay renueva uno de sus productos estrella, su Desmaquillador de Ojos bifásico que ha enamorado a millones de mujeres y del que vende 1 cada 5 segundos en todo el mundo.
            Además, su nuevo envase está fabricado con un 50% de materiales reciclados, reflejando así el compromiso de la marca con la sostenibilidad.
            ¿Su secreto?: hace lo que dice. Siempre fieles a la misión y valores de la compañía desde sus inicios hace 60 años.
          </p>
          <small>Precio de venta al público: 28,00 €</small>
          <small>Envase de 110 ml.</small>
        </div>
      </div>

      <br />

      <div className="product">
        <div className="product-text">
          <h2>CC Cream FPS 15 Protección Media</h2>
           <h6>
      Consigue un look sin imperfecciones muy natural con una fórmula que actúa como maquillaje a la vez que cuida tu piel con nuestro protector.
    </h6>
    <br />
    <ul>
      <li><strong>Cobertura ligera</strong> para una imagen impecable y natural.</li>
      <li>La opción perfecta para <strong>corregir tu piel sin parecer maquillada</strong>.</li>
      <li>Un mismo tono es perfecto para <strong>distintos tonos de piel</strong>.</li>
      <li>Adecuado para <strong>todos los tipos de piel</strong>.</li>
      <li><strong>Protección solar FPS 15</strong> para proteger tu piel del daño diario.</li>
      <li>Fórmula hidratante que mejora la textura y luminosidad de la piel.</li>
      <li>Acabado natural y fresco que dura todo el día.</li>
    </ul>
    <small>Consejo: Para mejores resultados, aplica con movimientos suaves y distribuye uniformemente.</small>
    <small>Precio de venta al público: 26,00 €</small>
  </div>

        <img className="product-image" src={cream} alt="CC Cream" />
      </div>

    <br />

      <div className="product">
        <img className="product-image" src={pestañas} alt="Máscara de pestañas" />
        <div className="product-text">
          <h2>Máscara de Pestañas Lash Love® Waterproof</h2>
          <h6>
            La Máscara de Pestañas Lash Love® Waterproof define, defiende y da volumen a tus pestañas, fortaleciéndolas y acondicionándolas sin saturarlas.
          </h6>
          <br />
          <ul>
            <li><strong>Innovador diseño</strong> de cepillo que separa las pestañas.</li>
            <li><strong>Fórmula de larga duración</strong>. Sin residuos. Sin grumos.</li>
            <li>Adecuado para <strong>piel sensible</strong> y para usuarias de lentes de contacto.</li>
            <li><strong>Oftalmológicamente probado</strong>.</li>
            <li><strong>Libre de fragancia</strong>.</li>
          </ul>
          <small>Precio de venta al público: 25,00 €</small>
        </div>
      </div>

<br />

      <div className="product">
        <div className="product-text">
          <h2>Brillo de Labios Mate</h2>
<h6><strong>Red Noir</strong>. Edición limitada.</h6>
<p>
  Brillo de labios mate de edición limitada, que se va a convertir en un imprescindible para ti. <br />
  ¡La textura mate está más de moda que nunca y te llenará de confianza!
</p>
<ul>
  <li><strong>Edición limitada</strong>.</li>
  <li>Acabado ligero.</li>
  <li>Textura aterciopelada.</li>
  <li>Fácil de aplicar con pincel integrado.</li>
  <li>Ideal para todo tipo de piel y tonos de labios.</li>
  <li>Su fórmula no reseca, gracias a sus ingredientes humectantes.</li>
</ul>
<small>Consejo: Aplícalo sobre labios exfoliados para un mejor acabado.</small>
<small>Precio de venta al público: 22,00 €</small>
        </div>

        <img className="product-image" src={rednoir} alt="Brillo de Labios Mate Red Noir" />
      </div>
    </nav>
  );
};
