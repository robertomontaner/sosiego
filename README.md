# Sosiego

Sonido adaptativo para **concentrarte, calmar la ansiedad y dormir**. Libre, gratis, sin cuenta, sin rastreo y sin suscripción.

Todo el sonido se **genera en tu dispositivo** con la Web Audio API: no hay servidor, no hay archivos de audio y funciona sin conexión una vez cargado. Es un único `index.html` (más un manifest y un service worker para instalarlo como app).

> ⚠️ **Sosiego no es un producto sanitario ni un tratamiento.** No cura el TDAH ni la ansiedad. Es una herramienta de apoyo. Si tu malestar es importante, consulta con un profesional.

## Qué hace

Al pulsar **Empezar**, Sosiego te hace 3 o 4 preguntas rápidas y genera una pista a tu medida:

1. **¿Qué vas a hacer?** Trabajar/estudiar, crear, leer, relajarte, meditar o dormir. Decide el modo (Enfoque, Calma o Dormir).
2. **¿Cómo te sientes?** Disperso, ansioso, cansado o bien. Ajusta tempo, brillo e intensidad.
3. **¿Qué sonido te apetece?** Cálido (piano eléctrico y pads), cristal (campanas y marimba), naturaleza (lluvia, mar o viento), electrónico (pulso suave) o sorpréndeme.
4. **¿Cuánta intensidad?** (solo en Enfoque) Suave, media o alta. Controla la profundidad de la modulación.

### Variedad
- Cada pista se **genera al momento** a partir de una semilla: tonalidad, escala, progresión de acordes, tempo, instrumentos, patrón de arpegio, bajo y paisaje natural. Nunca suena igual dos veces y cada una tiene nombre propio. Sosiego recuerda las últimas 8 pistas y evita repetir una parecida (tonalidad, escala, acordes, timbre, patrón).
- La pista **evoluciona por secciones**. En Enfoque los cambios son mínimos y lentos (acordes y brillo, cada 3–5 min) para no distraer: la variedad está entre pistas, no dentro. En Calma y Dormir hay algo más de movimiento.
- **⟳ Otra pista** genera una nueva con las mismas respuestas. **👍 / 👎** ajustan qué tipo de sonido te propone «Sorpréndeme» (se guarda solo en tu dispositivo).

### Efecto
- En Enfoque, la **modulación de amplitud** (16 Hz) se aplica a toda la música, incluida la reverberación, y hay pulso rítmico (arpegio, bajo y, en electrónico, un latido suave).
- **Arco de sesión**: la modulación empieza suave, sube durante los primeros ~2,5 minutos y baja en los últimos 2.
- **Ritmo del día**: en los bajones típicos (14–16 h, noche) el Enfoque es algo menos intenso.
- **Movimiento espacial**: el sonido gira lentamente a tu alrededor (muy leve en Enfoque).
- **Calma**: guía de respiración 4–6 (inhala 4 s, exhala 6 s); al meditar, respiración cuadrada 4–4–4–4.

### Sesión
- **Pomodoro 25/5**: 25 min de enfoque y 5 de descanso con sonido de calma, avisos con campanas, en bucle.
- Duraciones fijas con fundido final, o sin límite. Campo opcional para escribir en qué te vas a centrar.
- **Pulso cardiaco (opcional)**: entrada manual, por toques o pulsómetro Bluetooth. En Calma y Dormir el tempo lo sigue y lo baja poco a poco.

### Ambientes
Escenas realistas generadas por código en la GPU (WebGL, sin vídeos): **Planetario** (Tierra con texturas reales, Saturno y el Sol), **Nubes** (el cielo sigue la hora del día), **Bosque** con niebla y rayos de sol, **Bajo el agua**, **Coche bajo la lluvia**, **Cabaña** con chimenea, **Fogata** y **Tren**. Hay una versión ligera dibujada en 2D (opción «Gráficos realistas») y el diseño **Clásico · origen** (también en la rama `clasico-origen`). Cada ambiente tiene su propio sonido generado por la app (lluvia, fuego, agua, viento con pájaros, tren), opcional y con volumen aparte.

**Créditos de imagen:** las texturas de la Tierra (`assets/earth.jpg`, `assets/earth_maps.jpg`, `assets/moon.jpg`: superficie, nubes, luces nocturnas, océanos y Luna) proceden de los ejemplos de [three.js](https://github.com/mrdoob/three.js) (licencia MIT) y están basadas en imágenes *Blue Marble* de la NASA (dominio público).

## Lo que dice la ciencia (y lo que no)

- **Modulación de amplitud en música**: Woods et al. (2024), *Communications Biology*, doi:10.1038/s42003-024-07026-3. La música con modulaciones rápidas apoyó la atención sostenida y activó redes atencionales, con diferencias según el nivel de dificultad atencional. **Se hizo en colaboración con Brain.fm** y el efecto no apareció igual en todas las condiciones. Prometedor, no concluyente.
- **Ruido blanco/rosa**: Nigg et al. (2024), *JAACAP*, metaanálisis de 13 estudios: beneficio pequeño pero significativo en jóvenes con TDAH (g ≈ 0,25) y ligero empeoramiento en quienes no lo tienen. Mejor a volumen bajo.
- **Ruido marrón**: muy popular, pero casi todo es anecdótico; la evidencia real es sobre blanco/rosa.
- **Binaurales**: revisiones con resultados contradictorios. Desactivados por defecto.
- **Respiración lenta (~6/min)**: técnica habitual de relajación con respaldo moderado.

Sosiego **no reproduce los algoritmos propietarios** de Brain.fm ni de Endel (no tengo acceso a ellos): implementa técnicas publicadas y simples, de forma transparente. Que funcione para ti es algo que solo tú puedes comprobar.

## Usarlo

**En local:** abre `index.html` en Chrome, Edge, Firefox o Safari (o sírvelo con `python3 -m http.server`; el service worker solo se activa por HTTP/HTTPS).

**Publicarlo gratis:** sube la carpeta a GitHub Pages, Cloudflare Pages o Netlify. En el móvil: *Añadir a pantalla de inicio* para instalarlo y usarlo sin conexión.

Consejos: usa auriculares si puedes, volumen bajo (el sonido debe quedar de fondo) y prueba varios días antes de juzgar.

## Limitaciones conocidas

- Con la pantalla bloqueada, iOS puede cortar el audio (hay un truco experimental con `MediaStream`, sin probar en todos los dispositivos).
- Web Bluetooth solo funciona en Chrome/Edge (Android y ordenador); no hay en Safari/iOS. Muchos relojes (p. ej. Apple Watch) no emiten pulso por Bluetooth estándar: usa la entrada manual.
- No se ha medido con usuarios reales. Falta un A/B con una tarea de atención sostenida (tipo SART).

## Ideas para contribuir

- Pulso por **cámara** (fotopletismografía remota) sin sensores.
- Cadencia de **escritura/ratón** como señal de estado.
- Más modos y paisajes sonoros, traducciones (i18n).
- Pruebas A/B de atención sostenida dentro de la app, con datos locales y anónimos.
- Empaquetado nativo (Capacitor/Tauri) para segundo plano fiable en iOS.

## Nota sobre patentes

Brain.fm indica públicamente que su tecnología está patentada. Antes de distribuir a gran escala, conviene que alguien con conocimientos legales revise si la modulación de amplitud tal como se implementa aquí puede entrar en conflicto con alguna patente vigente en tu país. No es asesoramiento legal.

## Licencia

MIT. Ver `LICENSE`. Sin afiliación con Brain.fm ni Endel.
