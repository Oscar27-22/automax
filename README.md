# automax

## Requisitos

- Ejecutar de manera local: [Node](https://nodejs.org/en/download)
- Ejecutar por medio de contenedores: [Docker](https://docs.docker.com/engine/install/)
- Link de la imagen de Docker: [yenm222/automax](https://hub.docker.com/r/yenm222/automax)

## Ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Oscar27-22/automax.git
cd automax
```

Empezar el servidor localmente:

```bash
node app.js
```

Empezar el servidor con Docker:

```bash
docker build -t automax .
docker run -p 8888:8888 automax
```

O, realizando el pull de la imagen:

```bash
docker pull yenm222/automax
docker run --rm -p 8888:8888 yenm222/automax

# para Linux y emular ARM64 (deberia de funcionar por defecto con una version reciente de Docker Desktop)
docker pull --platform linux/arm64 yenm222/automax
docker run --platform linux/arm64 --rm -p 8888:8888 yenm222/automax
```

## Colaboradores

* **OSCAR JOAQUÍN MÁRQUEZ ORTEGA** – [Oscar27-22](https://github.com/Oscar27-22)
* **MARTÍN EDUARDO CHACÓN ORDUÑO** – [Chacon0754](https://github.com/Chacon0754)
* **EMILIANO PIÑÓN MARÍN** – [emilianopime](https://github.com/emilianopime)
* **MANUEL MARTÍNEZ MARTÍNEZ** – [Yenm2](https://github.com/Yenm2)

## Favicon

Favicon was generated using the following font (from [here](https://favicon.io/favicon-generator/)):

- Font Title: Leckerli One
- Font Author: undefined
- Font Source: https://fonts.gstatic.com/s/leckerlione/v20/V8mCoQH8VCsNttEnxnGQ-1itLZxcBtItFw.ttf
- Font License: undefined)
