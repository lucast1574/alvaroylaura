'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

function WeddingContent() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [envelopeHidden, setEnvelopeHidden] = useState(false);
  const searchParams = useSearchParams();

  const nombre = searchParams.get('nombre');
  const pases = searchParams.get('pases');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
    
    setTimeout(() => {
      const screen = document.getElementById('envelope-screen');
      if (screen) screen.classList.add('hidden');
      
      setTimeout(() => {
        setEnvelopeHidden(true);
      }, 1200);
    }, 1800);
  };

  return (
    <main className="font-montserrat">
      {!envelopeHidden && (
        <div id="envelope-screen" className="envelope-screen">
          <div 
            className={`envelope-container ${envelopeOpen ? 'open' : ''}`} 
            onClick={handleOpenEnvelope}
          >
            <div className="envelope">
              <div className="letter">
                <span className="letter-text font-great-vibes text-[3.2rem] text-sec-text-alt">Álvaro y Laura</span>
              </div>
              <div className="front-left"></div>
              <div className="front-right"></div>
              <div className="front-bottom"></div>
              <div className="flap"></div>
            </div>
            <p className="open-text">Toca para abrir</p>
          </div>
        </div>
      )}

      <div className="container max-w-[480px] lg:max-w-[900px] mx-auto my-0 sm:my-10 bg-bg-cream shadow-[0_15px_50px_rgba(0,0,0,0.1)] overflow-hidden text-center relative rounded-none sm:rounded-lg">
        
        {/* SECCIÓN 1: HERO */}
        <section className="relative w-full h-[60vh] min-h-[450px] lg:h-[70vh] flex items-center justify-center bg-[#C1B4A9]">
          <Image 
            src="/image/TU_FOTO_PRINCIPAL.jpg" 
            alt="Álvaro y Laura Hero" 
            fill 
            priority
            className="z-[1] brightness-85 object-cover"
          />
          <div className="hero-overlay relative z-[2] w-[85%] text-white fade-in">
            <hr className="border-0 border-t border-white my-[15px] opacity-80" />
            <h1 className="font-cormorant text-[2.8rem] lg:text-[4.5rem] m-0 tracking-[2px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] uppercase">ÁLVARO & LAURA</h1>
            <hr className="border-0 border-t border-white my-[15px] opacity-80" />
            <div className="date font-semibold text-[0.85rem] tracking-[5px] mt-5 [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)] fade-in delay-1">05 . 09 . 2026</div>
          </div>
        </section>

        {/* SECCIÓN 2: VERSÍCULO */}
        <section className="relative bg-sec-bg-alt px-10 py-[100px] overflow-hidden">
          <Image 
            src="/image/FLOR_ESQUINA_DERECHA.png" 
            className="absolute w-[150px] opacity-60 top-[10px] left-[10px] rotate-180" 
            alt="decoración" 
            width={150} 
            height={150}
          />
          <Image 
            src="/image/FLOR_ESQUINA_IZQUIERDA.png" 
            className="absolute w-[150px] opacity-60 bottom-[10px] right-[10px] rotate-180" 
            alt="decoración" 
            width={150} 
            height={150}
          />
          <div className="verse-content relative z-[2] max-w-[500px] mx-auto fade-in">
            <p className="font-cormorant italic text-[1.6rem] leading-relaxed text-sec-text-alt mb-5">
              &quot;Deléitate asimismo<br />en Jehová,<br />
              Y él te concederá las<br />peticiones de tu corazón.&quot;
            </p>
            <h3 className="font-great-vibes text-[3rem] text-sec-text-alt m-0 font-normal">Salmos 37:4</h3>
          </div>
        </section>

        {/* SECCIÓN 3: PHOTO */}
        <section className="w-full h-[300px] bg-[#C1B4A9] overflow-hidden block fade-in">
          <Image 
            src="/image/FOTO_FUENTE_JARDIN.jpg" 
            alt="Fuente Jardín" 
            width={900} 
            height={600} 
            className="w-full h-full object-cover"
          />
        </section>

        {/* SECCIÓN 4: NOS CASAMOS */}
        <section className="bg-sec-bg-alt text-sec-text-alt px-5 py-[60px]">
          <div className="flex justify-center items-center gap-[15px] mb-5 fade-in">
            <div className="flex flex-col items-center">
              <span className="font-great-vibes text-[3.5rem] leading-[0.6] -ml-[30px]">Nos</span>
              <span className="font-cormorant text-[2.5rem] tracking-[2px]">CASAMOS</span>
            </div>
          </div>

          <h2 className="font-great-vibes text-[2.3rem] lg:text-[2rem] leading-[1.1] my-[10px] lg:my-[15px] px-[10px] fade-in delay-1">
            {nombre ? `¡Hola ${nombre}!` : ''}
          </h2>
          <p className="font-montserrat text-[0.9rem] leading-relaxed mb-[35px] max-w-[320px] mx-auto fade-in delay-1">
            {pases === "1" 
              ? "Queremos que seas parte del día más importante de nuestras vidas."
              : "Queremos que sean parte del día más importante de nuestras vidas."
            }
          </p>

          <hr className="border-0 h-px bg-accent-gold w-[40%] mx-auto mb-[30px] fade-in delay-2" />

          <div className="flex flex-col items-center fade-in delay-2">
            <p className="font-cormorant italic text-[1.3rem] mb-5">Con la bendición de Dios y nuestros padres</p>
            <div className="text-[0.85rem] leading-relaxed text-sec-text-alt">
              <p>Einstein Seith Reyna Romero<br />Orfa Isabel Ruiz Lavado</p>
              <span className="font-great-vibes text-[2rem] text-accent-gold my-[15px] lg:my-[10px] block leading-none">&</span>
              <p>Raúl Enrique Santillán Alván<br />Mirian Consuelo Arévalo Lozano</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: RESERVA */}
        <section className="flex flex-col lg:flex-row bg-sec5-bg text-sec5-text min-h-[350px] lg:min-h-[450px]">
          <div className="relative w-full lg:w-1/2 h-[250px] lg:h-auto bg-[#e0d8d4] fade-in">
            <Image 
              src="/image/FOTO_RESERVA.jpg" 
              alt="Álvaro y Laura Reserva" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="flex-1 px-[10px] py-10 lg:p-[60px] flex flex-col items-center justify-center fade-in delay-1">
            <h2 className="font-cormorant text-[2rem] tracking-widest">RESERVA</h2>
            <p className="text-[0.85rem] font-light mb-[15px] tracking-[0.5px]">esta fecha especial</p>
            <Image 
              src="/image/FLOR_RESERVA_BLANCA.png" 
              alt="Flor Reserva Blanca" 
              width={90} 
              height={90}
              className="my-[5px] lg:my-[15px] object-contain"
            />
            <h3 className="font-cormorant text-[2rem] mb-[15px]">Septiembre</h3>
            <div className="relative w-full max-w-[220px] mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] border border-sec5-text rounded-full pointer-events-none z-[1]"></div>
              <div className="flex border-t border-b border-sec5-text py-3">
                <div className="flex-1 flex flex-col items-center justify-center z-[2]">
                  <span className="font-cormorant text-[1.8rem] leading-none">04</span>
                  <span className="text-[0.6rem] font-semibold mt-[5px] tracking-widest">VIE</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center z-[2] border-l border-r border-sec5-text">
                  <span className="font-cormorant text-[1.8rem] leading-none">05</span>
                  <span className="text-[0.6rem] font-semibold mt-[5px] tracking-widest">SAB</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center z-[2]">
                  <span className="font-cormorant text-[1.8rem] leading-none">06</span>
                  <span className="text-[0.6rem] font-semibold mt-[5px] tracking-widest">DOM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: CEREMONIA */}
        <section className="bg-sec-bg-alt text-sec-text-alt px-5 py-[60px] flex flex-col items-center">
          <div className="flex flex-col items-center mb-[10px] fade-in">
            <span className="font-great-vibes text-[3rem] leading-[0.7] -ml-[20px]">Nuestra</span>
            <span className="font-cormorant text-[2.2rem] tracking-widest">CEREMONIA</span>
          </div>
          <Image 
            src="/image/ICONO_GAZEBO.png" 
            className="w-[60px] h-auto my-[5px] lg:my-[8px] object-contain fade-in delay-1" 
            alt="Ícono Gazebo" 
            width={60} 
            height={60}
          />
          <h2 className="font-cormorant text-[2rem] mb-[5px] fade-in delay-1">Villa Luis Adolfo II</h2>
          <h3 className="font-cormorant text-[1.6rem] mb-[30px] fade-in delay-1">11:30 am</h3>
          <a href="https://maps.app.goo.gl/tmPiTEEaNYiNCrtD7" className="bg-sec5-bg text-white text-[0.8rem] tracking-[3px] uppercase no-underline px-[35px] py-3 rounded-[25px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all hover:bg-purple-dark hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">VER MAPA</a>
        </section>

        {/* SECCIÓN 7: DRESS CODE */}
        <section className="flex flex-col items-center bg-sec5-bg text-sec5-text px-5 py-[60px]">
          <div className="w-full text-center mb-[35px] fade-in">
            <h2 className="font-cormorant text-[2.2rem] tracking-widest">DRESS CODE</h2>
            <span className="font-great-vibes text-[3.5rem] leading-none my-[5px] lg:my-[20px] block">Elegante</span>
            <p className="text-[0.85rem] leading-relaxed">Evitar los colores blanco, beige e ivory similares<br />serán reservados para la novia.</p>
          </div>
          <div className="w-full flex justify-center fade-in delay-1">
            <Image 
              src="/image/ILUSTRACION_TRAJES.png" 
              alt="Dress Code Trajes" 
              width={200} 
              height={200} 
              className="w-full max-w-[200px] h-auto object-contain"
            />
          </div>
        </section>

        {/* SECCIÓN 8: REGALOS */}
        <section className="bg-sec-bg-alt text-sec-text-alt px-[50px] py-[50px] border-t-[5px] border-b-[5px] border-sec5-bg">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 mb-[30px]">
            <div className="flex-1 font-cormorant text-[1.3rem] leading-relaxed text-left lg:pr-10 lg:border-r lg:border-sec-text-alt/20 fade-in">
              Tu presencia es nuestro mejor 
              regalo, pero si deseas tener un 
              detalle con nosotros, lo sabremos 
              apreciar con mucho cariño.
            </div>
            <div className="flex-1 text-[0.8rem] text-left leading-relaxed fade-in delay-1">
              <div className="mb-[15px]">
                Cuenta BCP Soles: <strong>19107450834094</strong><br />
                CCI: <strong>00219110745083409454</strong><br />
                Laura Santillán
              </div>
              <div className="mb-0">
                Cuenta Interbank Soles : <strong>6163495840861</strong><br />
                CCI: <strong>00361601349584086106</strong><br />
                Álvaro Reyna
              </div>
            </div>
          </div>
          <Image 
            src="/image/FLOR_REGALOS.png" 
            className="w-[120px] h-auto mx-auto block object-contain fade-in delay-2" 
            alt="Flor Regalos" 
            width={120} 
            height={120}
          />
        </section>

        {/* SECCIÓN 9: HONOR */}
        <section className="relative bg-sec5-bg text-sec5-text px-5 py-20 flex items-center justify-center min-h-[250px]">
          <Image 
            src="/image/FLOR_ESQUINA_SUP_DER.png" 
            className="absolute w-[130px] h-auto object-contain z-[1] top-[15px] right-[15px] fade-in" 
            alt="Flor Esquina 1" 
            width={130} 
            height={130}
          />
          <Image 
            src="/image/FLOR_ESQUINA_INF_IZQ.png" 
            className="absolute w-[130px] h-auto object-contain z-[1] bottom-[15px] left-[15px] fade-in delay-1" 
            alt="Flor Esquina 2" 
            width={130} 
            height={130}
          />
          
          {pases && (
            <div className="z-[2] flex flex-col items-center fade-in delay-1">
              <div className="flex items-center justify-center">
                <span className="font-cormorant text-[1.8rem] lg:text-[1.5rem] mr-[15px] lg:mr-[10px]">Hemos reservado</span>
                <span className="font-montserrat text-[2.5rem] lg:text-[4rem] font-normal leading-[0.8]">{pases}</span>
              </div>
              <div className="font-cormorant text-[1.8rem] lg:text-[1.5rem] mt-[15px] lg:mt-[10px]">
                {pases === "1" ? "lugar en su honor." : "lugares en su honor."}
              </div>
              
              <p className="font-montserrat text-[0.85rem] mt-[30px] pt-[15px] border-t border-sec5-text/40 text-sec5-text leading-relaxed font-light tracking-[0.5px] max-w-[300px] fade-in delay-2">
                Amamos a sus pequeños, pero nuestra boda será un evento <strong>solo para adultos</strong>.<br />Agradecemos su comprensión.
              </p>
            </div>
          )}
          {!pases && (
            <div className="z-[2] flex flex-col items-center fade-in delay-1">
              <p className="font-montserrat text-[0.85rem] mt-0 text-sec5-text leading-relaxed font-light tracking-[0.5px] max-w-[300px]">
                Amamos a sus pequeños, pero nuestra boda será un evento <strong>solo para adultos</strong>.<br />Agradecemos su comprensión.
              </p>
            </div>
          )}
        </section>

        {/* TRANSICIÓN PHOTO */}
        <section className="w-full h-[300px] bg-[#C1B4A9] overflow-hidden block fade-in">
          <Image 
            src="/image/FOTO_TRANSICION.jpg" 
            alt="Pareja Transición" 
            width={900} 
            height={300} 
            className="w-full h-full object-cover"
          />
        </section>

        {/* SECCIÓN 10: CONFIRMACIÓN */}
        <section className="flex flex-col lg:flex-row bg-sec-bg-alt text-sec-text-alt min-h-[400px] lg:min-h-[450px]">
          <div className="flex-1 p-[50px] lg:p-[60px] flex flex-col items-center justify-center text-center fade-in">
            <p className="font-cormorant text-[1.4rem] leading-relaxed mb-[15px]">
              Estamos muy emocionados de que llegue el 
              gran día. Gracias por ser parte de este sueño.
            </p>
            <p className="text-[0.85rem] font-bold leading-relaxed mb-[30px]">
              Esperamos contar con su confirmación<br />
              hasta el 15 de julio.
            </p>
            <a href="https://w.app/vo4tkf" className="bg-sec-text-alt text-white text-[0.85rem] tracking-[2px] uppercase no-underline px-[35px] py-[15px] rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all hover:bg-purple-dark hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">CONFIRMAR<br />ASISTENCIA</a>
            <p className="text-[0.85rem] font-bold leading-relaxed mt-5 mb-[5px]">
              Whatsapp: 987 037 013
            </p>
          </div>
          
          <div className="relative w-full lg:w-1/2 h-[250px] lg:h-auto bg-[#C1B4A9] fade-in delay-1">
            <Image 
              src="/image/FOTO_CONFIRMACION.jpg" 
              alt="Álvaro y Laura Confirmación" 
              fill 
              className="object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-purple-main font-cormorant text-2xl">Cargando...</div>}>
      <WeddingContent />
    </Suspense>
  );
}
