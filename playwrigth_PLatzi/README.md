# Explorando pruebas con Playwright

Playwright no solo permite generar pruebas automatizadas, sino también explorarlas desde diferentes ángulos y formatos. En esta guía aprenderás el flujo básico para crear, revisar y ejecutar pruebas, desde abrirlas en Visual Studio Code hasta ejecutarlas desde la terminal, además de conocer algunas configuraciones que Playwright ofrece para adaptar la ejecución según tus necesidades.

## ¿Cómo crear y ejecutar un nuevo test con Playwright?

### 1. Generar un nuevo test

Utiliza el comando de Playwright para iniciar la creación de una prueba:

```bash
npx playwright codegen
```

Este comando abre el navegador y permite registrar las acciones realizadas sobre una página web.

---

### 2. Visitar un sitio web para practicar

Puedes utilizar sitios de práctica como **UI Testing Playground** para experimentar con diferentes escenarios de automatización y mejorar tus habilidades de testing.

Ejemplo de flujo:

- Abrir el sitio web.
- Elegir un elemento o funcionalidad para probar.
- Realizar acciones como clics, escritura de datos o navegación.

---

### 3. Registrar acciones

Playwright Codegen captura las interacciones realizadas en el navegador y genera automáticamente el código de prueba correspondiente.

Acciones comunes:

- Hacer clic en botones.
- Completar formularios.
- Seleccionar elementos.
- Navegar entre páginas.
- Validar comportamientos.

---

### 4. Guardar el test generado

Copia el código generado y guárdalo en un archivo de prueba, por ejemplo:

```text
uittesting.spec.ts
```

Ejemplo de estructura:

```text
tests/
 └── uittesting.spec.ts
```

---

### 5. Ejecutar el test

Para ejecutar una prueba específica utiliza:

```bash
npx playwright test uittesting.spec.ts
```

También puedes ejecutar todos los tests del proyecto con:

```bash
npx playwright test
```

---

## Explorar Playwright desde diferentes perspectivas

Playwright permite adaptar la ejecución de pruebas mediante diferentes configuraciones:

- Ejecutar pruebas en distintos navegadores.
- Usar modo visible (`headed`) para observar la ejecución.
- Ejecutar pruebas en paralelo.
- Generar reportes de resultados.
- Depurar pruebas paso a paso.

Ejemplo:

```bash
npx playwright test --headed
```

---

## Flujo resumido

```text
1. Generar test
   ↓
2. Abrir sitio web de práctica
   ↓
3. Registrar acciones con Playwright Codegen
   ↓
4. Guardar archivo .spec.ts
   ↓
5. Ejecutar prueba desde la terminal

```

Con Playwright puedes pasar de simplemente crear pruebas a explorar, depurar y validar aplicaciones web desde diferentes escenarios.


npx playwright test uittesting

 '''

 ---

## Visualizar el reporte de ejecución

Una vez que ejecutas tus pruebas, Playwright genera un **reporte HTML** que te permite examinar en detalle la ejecución de cada test.

Con este reporte puedes:

- Ver qué pruebas pasaron o fallaron.
- Revisar capturas de pantalla y videos (si están habilitados).
- Analizar el **trace** para depurar errores paso a paso.
- Consultar la duración de cada prueba y los mensajes de error.

### Generar y visualizar el reporte

Después de ejecutar tus pruebas, utiliza el siguiente comando para abrir el reporte en tu navegador:

```bash
npx playwright show-report
```

> **Nota:** Si el reporte aún no existe, primero ejecuta tus pruebas con:

```bash
npx playwright test
```

Al finalizar la ejecución, Playwright generará automáticamente el reporte HTML en la carpeta `playwright-report/`, desde donde podrás inspeccionar todos los resultados de forma visual.

## Anatomía de los Test

El patrón más común para generar una prueba es mediante 3A (Arrange Act Asset). El cual explica la forma de organizar y estructurar las pruebas para que fuesen claras y entendibles, separando cada prueba según el enfoque se pretende dar. .

- Organización (Arrange). Inicializa los objetos, estableciendo sus estados o valores iniciales.
- Acto (Act). La invocación de la prueba según sea el escenario estipulado.
- Afirmación (Asset). Se verifica la acción, según sea lo esperado por la prueba