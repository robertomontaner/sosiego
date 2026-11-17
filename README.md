# Sosiego

Sonido adaptativo para **concentrarte, calmar la ansiedad y dormir**. Libre, gratis, sin cuenta, sin rastreo y sin suscripción.

Todo el sonido se **genera en tu dispositivo** con la Web Audio API: no hay servidor, no hay archivos de audio y funciona sin conexión una vez cargado. Es un único `index.html` (más un manifest y un service worker para instalarlo como app).

> ⚠️ **Sosiego no es un producto sanitario ni un tratamiento.** No cura el TDAH ni la ansiedad. Es una herramienta de apoyo. Si tu malestar es importante, consulta con un profesional.

## Qué hace

| Modo | Qué suena | Para qué |
|---|---|---|
| **Enfoque** | Acordes suaves con **modulación de amplitud** rápida (16 Hz por defecto) + ruido marrón | Tareas largas, estudio, TDAH |
| **Calma** | Acordes lentos, campanitas, ruido rosa suave y **guía de respiración** (inhala 4 s / exhala 6 s) | Ansiedad, bajar revoluciones |
| **Dormir** | Sonido muy grave y casi inmóvil, ruido marrón, fundido final largo | Conciliar el sueño |

### Adaptación a la persona

- **Tu pulso**: escribe tus latidos por minuto, márcalos tocando al ritmo en la muñeca, o conecta un **pulsómetro Bluetooth** (Web Bluetooth, perfil estándar *Heart Rate*). Las campanas siguen ese ritmo; en Calma y Dormir el pulso guía va bajando poco a poco hasta ~20 lpm por debajo del tuyo.
- **Hora del día**: el brillo del sonido (filtro paso bajo) es más claro por la mañana y más oscuro por la noche, y se sugiere el modo según la hora.
- **Todo ajustable**: intensidad y velocidad de la modulación, tipo y nivel de ruido, binaurales opcionales, duración de sesión con fundido de salida.

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
