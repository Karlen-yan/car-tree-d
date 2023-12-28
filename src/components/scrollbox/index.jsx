"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./style.module.css";

export default function Index() {
  const boxRefs = {
    a: useRef(null),
    b: useRef(null),
    c: useRef(null)
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    for (let key in boxRefs) {
      const currentBox = boxRefs[key].current;

      gsap.set(currentBox, { x: key === "a" ? "0" : "100vw" });

      const tl = gsap.timeline({ defaults: { ease: "none" } });
      tl.to(currentBox, { x: "-100vw", duration: 1 });

      ScrollTrigger.create({
        animation: tl,
        trigger: currentBox,
        start: "top top",
        end: `+=100`,
        scrub: true
        // pin: true
      });
    }
  }, []);

  return (
    <div id="main_continer">
      <div ref={boxRefs.a} className={`${styles.box} ${styles.a}`}>
        <div className={styles.boxA}>
          <h1>Mercedes-Benz E63</h1>
          <p>
            El Mercedes-Benz E63 es un sedán de alta gama conocido por su
            rendimiento excepcional y su lujo refinado. Este vehículo combina un
            diseño elegante con un motor potente, ofreciendo una experiencia de
            conducción emocionante y cómoda. Equipado con avanzadas tecnologías
            de asistencia al conductor y características de seguridad, el E63
            ofrece un equilibrio perfecto entre prestaciones deportivas y
            comodidad para viajes largos. Su diseño exterior dinámico se
            complementa con un lujoso interior repleto de materiales de alta
            calidad y tecnología intuitiva.
          </p>
          <p>
            {" "}En resumen, el Mercedes-Benz E63 es la combinación perfecta de
            estilo, rendimiento y sofisticación.
          </p>
        </div>
      </div>
      <div ref={boxRefs.b} className={`${styles.box} ${styles.b}`}>
        <div className={styles.boxB}>
          <h1>Detalles del Mercedes-Benz E63</h1>
          <table className={styles.tableStyles}>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Motor</td>
                <td>Motor V8 Biturbo</td>
              </tr>
              <tr>
                <td>Potencia</td>
                <td>600+ caballos de fuerza</td>
              </tr>
              <tr>
                <td>Aceleración</td>
                <td>De 0 a 100 km/h en menos de 3.5 segundos</td>
              </tr>
              <tr>
                <td>Transmisión</td>
                <td>Transmisión automática de 9 velocidades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div ref={boxRefs.c} className={`${styles.box} ${styles.c}`}>
        <h1>Div3</h1>
      </div>
    </div>
  );
}
