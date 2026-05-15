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
      // Start fading out the screen
      const screen = document.getElementById('envelope-screen');
      if (screen) screen.classList.add('hidden');
      
      setTimeout(() => {
        setEnvelopeHidden(true);
      }, 1200);
    }, 1800);
  };


  return (
    <main>
      {!envelopeHidden && (
        <div id="envelope-screen" className={`envelope-screen ${envelopeOpen ? 'hidden' : ''}`}>
          <div 
            className={`envelope-container ${envelopeOpen ? 'open' : ''}`} 
            onClick={handleOpenEnvelope}
          >
            <div className="envelope">
              <div className="letter">
                <span className="letter-text">Álvaro y Laura</span>
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

      <div className="container">
        <section className="sec-1-hero">
          <Image 
            src="/image/TU_FOTO_PRINCIPAL.jpg" 
            alt="Álvaro y Laura Hero" 
            fill 
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay fade-in">
            <hr />
            <h1>ÁLVARO & LAURA</h1>
            <hr />
            <div className="date fade-in delay-1">05 . 09 . 2026</div>
          </div>
        </section>

        <section className="sec-2-versiculo">
          <Image 
            src="/image/FLOR_ESQUINA_DERECHA.png" 
            className="verse-flower top-left-flower" 
            alt="decoración" 
            width={150} 
            height={150}
          />
          <Image 
            src="/image/FLOR_ESQUINA_IZQUIERDA.png" 
            className="verse-flower bottom-right-flower" 
            alt="decoración" 
            width={150} 
            height={150}
          />
          <div className="verse-content fade-in">
            <p className="verse-main">
              &quot;Deléitate asimismo<br />en Jehová,<br />
              Y él te concederá las<br />peticiones de tu corazón.&quot;
            </p>
            <h3 className="verse-citation">Salmos 37:4</h3>
          </div>
        </section>

        <section className="sec-3-photo fade-in">
          <Image 
            src="/image/FOTO_FUENTE_JARDIN.jpg" 
            alt="Fuente Jardín" 
            width={900} 
            height={600} 
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </section>

        <section className="sec-4-casamos">
          <div className="casamos-header fade-in">
            <div className="casamos-text">
              <span className="nos">Nos</span>
              <span className="casamos">CASAMOS</span>
            </div>
          </div>

          <h2 className="fade-in delay-1">
            {nombre ? `¡Hola ${nombre}!` : ''}
          </h2>
          <p className="invite-text fade-in delay-1">
            {pases === "1" 
              ? "Queremos que seas parte del día más importante de nuestras vidas."
              : "Queremos que sean parte del día más importante de nuestras vidas."
            }
          </p>

          <hr className="divider-line fade-in delay-2" />

          <div className="parents-container fade-in delay-2">
            <p className="bendicion-text">Con la bendición de Dios y nuestros padres</p>
            <div className="parents-names">
              <p>Einstein Seith Reyna Romero<br />Orfa Isabel Ruiz Lavado</p>
              <span className="ampersand">&</span>
              <p>Raúl Enrique Santillán Alván<br />Mirian Consuelo Arévalo Lozano</p>
            </div>
          </div>
        </section>

        <section className="sec-5-reserva">
          <div className="reserva-photo-container fade-in">
            <Image 
              src="/image/FOTO_RESERVA.jpg" 
              alt="Álvaro y Laura Reserva" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="reserva-content fade-in delay-1">
            <h2>RESERVA</h2>
            <p className="subtitle">esta fecha especial</p>
            <Image 
              src="/image/FLOR_RESERVA_BLANCA.png" 
              className="reserva-content-flower" 
              alt="Flor Reserva Blanca" 
              width={90} 
              height={90}
            />
            <h3>Septiembre</h3>
            <div className="calendar-container">
              <div className="circle-overlay"></div>
              <div className="calendar-row">
                <div className="cal-col">
                  <span className="cal-num">04</span>
                  <span className="cal-day">VIE</span>
                </div>
                <div className="cal-col middle">
                  <span className="cal-num">05</span>
                  <span className="cal-day">SAB</span>
                </div>
                <div className="cal-col">
                  <span className="cal-num">06</span>
                  <span className="cal-day">DOM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec-6-ceremonia">
          <div className="ceremonia-title-wrapper fade-in">
            <span className="nuestra">Nuestra</span>
            <span className="ceremonia">CEREMONIA</span>
          </div>
          <Image 
            src="/image/ICONO_GAZEBO.png" 
            className="gazebo-icon fade-in delay-1" 
            alt="Ícono Gazebo" 
            width={60} 
            height={60}
          />
          <h2 className="ceremonia-lugar fade-in delay-1">Villa Luis Adolfo II</h2>
          <h3 className="ceremonia-hora fade-in delay-1">11:30 am</h3>
          <a href="https://maps.app.goo.gl/tmPiTEEaNYiNCrtD7" className="btn-mapa" target="_blank" rel="noopener noreferrer">VER MAPA</a>
        </section>

        <section className="sec-7-dresscode">
          <div className="dresscode-text fade-in">
            <h2>DRESS CODE</h2>
            <span className="elegante">Elegante</span>
            <p>Evitar los colores blanco, beige e ivory similares<br />serán reservados para la novia.</p>
          </div>
          <div className="dresscode-img-container fade-in delay-1">
            <Image 
              src="/image/ILUSTRACION_TRAJES.png" 
              alt="Dress Code Trajes" 
              width={200} 
              height={200} 
              style={{ height: 'auto' }}
            />
          </div>
        </section>

        <section className="sec-8-regalos">
          <div className="regalos-container">
            <div className="regalos-text fade-in">
              Tu presencia es nuestro mejor 
              regalo, pero si deseas tener un 
              detalle con nosotros, lo sabremos 
              apreciar con mucho cariño.
            </div>
            <div className="regalos-cuentas fade-in delay-1">
              <div className="cuenta-block">
                Cuenta BCP Soles: <strong>19107450834094</strong><br />
                CCI: <strong>00219110745083409454</strong><br />
                Laura Santillán
              </div>
              <div className="cuenta-block" style={{ marginBottom: 0 }}>
                Cuenta Interbank Soles : <strong>6163495840861</strong><br />
                CCI: <strong>00361601349584086106</strong><br />
                Álvaro Reyna
              </div>
            </div>
          </div>
          <Image 
            src="/image/FLOR_REGALOS.png" 
            className="regalos-flor fade-in delay-2" 
            alt="Flor Regalos" 
            width={120} 
            height={120}
          />
        </section>

        <section className="sec-9-honor">
          <Image 
            src="/image/FLOR_ESQUINA_SUP_DER.png" 
            className="honor-corner-flower flower-top-right fade-in" 
            alt="Flor Esquina 1" 
            width={130} 
            height={130}
          />
          <Image 
            src="/image/FLOR_ESQUINA_INF_IZQ.png" 
            className="honor-corner-flower flower-bottom-left fade-in delay-1" 
            alt="Flor Esquina 2" 
            width={130} 
            height={130}
          />
          
          {pases && (
            <div className="honor-text-wrapper fade-in delay-1">
              <div className="honor-top-line">
                <span className="texto">Hemos reservado</span>
                <span className="number">{pases}</span>
              </div>
              <div className="honor-bottom-line">
                {pases === "1" ? "lugar en su honor." : "lugares en su honor."}
              </div>
              
              <p className="adults-only-text fade-in delay-2">
                Amamos a sus pequeños, pero nuestra boda será un evento <strong>solo para adultos</strong>.<br />Agradecemos su comprensión.
              </p>
            </div>
          )}
          {!pases && (
            <div className="honor-text-wrapper fade-in delay-1">
              <p className="adults-only-text" style={{ borderTop: 'none', marginTop: 0 }}>
                Amamos a sus pequeños, pero nuestra boda será un evento <strong>solo para adultos</strong>.<br />Agradecemos su comprensión.
              </p>
            </div>
          )}
        </section>

        <section className="sec-transition-photo fade-in">
          <Image 
            src="/image/FOTO_TRANSICION.jpg" 
            alt="Pareja Transición" 
            width={900} 
            height={300} 
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </section>

        <section className="sec-10-confirmacion">
          <div className="confirmacion-text fade-in">
            <p className="emocionados">
              Estamos muy emocionados de que llegue el 
              gran día. Gracias por ser parte de este sueño.
            </p>
            <p className="esperamos">
              Esperamos contar con su confirmación<br />
              hasta el 15 de julio.
            </p>
            <a href="https://w.app/vo4tkf" className="btn-confirmar" target="_blank" rel="noopener noreferrer">CONFIRMAR<br />ASISTENCIA</a>
            <p className="esperamos" style={{ marginTop: '20px', marginBottom: '5px' }}>
              Whatsapp: 987 037 013
            </p>
          </div>
          
          <div className="confirmacion-photo-container fade-in delay-1">
            <Image 
              src="/image/FOTO_CONFIRMACION.jpg" 
              alt="Álvaro y Laura Confirmación" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <WeddingContent />
    </Suspense>
  );
}
