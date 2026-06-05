const preguntasHardware = [
    {
        id: 1,
        pregunta: "USB 4.2 puede alcanzar una tasa de transferencia de: [cite: 11]",
        opciones: [
            "20 Gbps [cite: 12]",
            "40 Mbps [cite: 12]",
            "80 Mbps [cite: 12]",
            "Ninguna de las otras respuestas es correcta [cite: 12]"
        ],
        correcta: 3,
        explicacion: "USB 4 en su versión 2.0 (4.2) alcanza hasta 80 Gbps mediante codificación PAM3, por lo que ninguna opción en Mbps o 20 Gbps es correcta."
    },
    {
        id: 2,
        pregunta: "Conectores USB cuadrados: [cite: 13]",
        opciones: [
            "Tipo A [cite: 14]",
            "Tipo B [cite: 14]",
            "Tipo C [cite: 15]"
        ],
        correcta: 1,
        explicacion: "El USB Tipo B es el conector cuadrado utilizado tradicionalmente en impresoras y escáneres[cite: 14]."
    },
    {
        id: 3,
        pregunta: "¿A qué tecnología se asocia el uso de switches: [cite: 16]",
        opciones: [
            "PCI [cite: 17]",
            "VESA-LB [cite: 18]",
            "PCI-E [cite: 19]"
        ],
        correcta: 2,
        explicacion: "PCI Express (PCI-E) abandona el bus compartido y utiliza enlaces dedicados punto a punto conmutados mediante switches[cite: 19, 38]."
    },
    {
        id: 4,
        pregunta: "Señala la afirmación cierta: [cite: 20]",
        opciones: [
            "El ancho de banda de USB 1.0 es menor que el ancho de banda de SATA 1 [cite: 21]",
            "El ancho de banda de USB 1.0 es mayor que el ancho de banda de SATA 1 [cite: 22]",
            "El ancho de banda de USB 1.0 es igual que el ancho de banda de SATA 1 [cite: 23]"
        ],
        correcta: 0,
        explicacion: "USB 1.0 funciona a un máximo de 12 Mbps [cite: 21], mientras que SATA 1 alcanza velocidades de hasta 1.5 Gbps (150 MB/s netos)[cite: 21]."
    },
    {
        id: 5,
        pregunta: "A un bus de expansión con estos datos: ancho de 32 bits, frecuencia de 10 MHz y un ciclo por transferencia; le corresponde un ancho de banda de: [cite: 24, 25]",
        opciones: [
            "40 Mbytes/s [cite: 26]",
            "320 Mbits/s [cite: 26]",
            "40 Mbits/s [cite: 27]",
            "320 Mbytes/s [cite: 28]"
        ],
        correcta: 0,
        explicacion: "Fórmula: (32 bits / 8) * 10 MHz / 1 ciclo = 4 Bytes * 10 MHz = 40 Mbytes/s[cite: 24, 26]."
    },
    {
        id: 6,
        pregunta: "A un bus de expansión con estos datos: ancho de 16 bits, frecuencia de 8,33 MHz y dos ciclos por transferencia; le corresponde un ancho de banda de: [cite: 29, 30]",
        opciones: [
            "4 MB/s [cite: 31]",
            "8 MB/s [cite: 31]",
            "16 MB/s [cite: 32]",
            "32 MB/s [cite: 33]"
        ],
        correcta: 1,
        explicacion: "Fórmula: (16 bits / 8) * 8.33 MHz / 2 ciclos = (2 Bytes * 8.33 MHz) / 2 = 8.33 MB/s (redondeado comercialmente a 8 MB/s)[cite: 29, 31]."
    },
    {
        id: 7,
        pregunta: "Topología de PCIe: [cite: 37]",
        opciones: [
            "Bus compartido, serie [cite: 38]",
            "Bus punto a punto, serie [cite: 38]",
            "Bus compartido, paralelo [cite: 38]",
            "Bus punto a punto, paralelo [cite: 38]"
        ],
        correcta: 1,
        explicacion: "PCIe utiliza una arquitectura serie basada en enlaces dedicados e individuales (punto a punto) para cada dispositivo[cite: 38]."
    },
    {
        id: 8,
        pregunta: "Qué bus de expansión está especializado en la gestión del monitor: [cite: 39]",
        opciones: [
            "PCI [cite: 40]",
            "EISA [cite: 40]",
            "AGP [cite: 40]"
        ],
        correcta: 2,
        explicacion: "AGP (Accelerated Graphics Port) fue desarrollado específicamente para conectar tarjetas aceleradoras de gráficos de alto rendimiento[cite: 40]."
    },
    {
        id: 9,
        pregunta: "Los conectores USB azules (versión 3) están disponibles en la modalidad: [cite: 41]",
        opciones: [
            "Tipo A [cite: 42]",
            "Tipo A y Tipo B [cite: 42]",
            "Tipo A, Tipo B y Tipo C [cite: 42]"
        ],
        correcta: 1,
        explicacion: "El estándar USB 3.0 define conectores azules exclusivamente para las variantes físicas Tipo A y Tipo B[cite: 42]. El Tipo C es estándar nativo y no usa este código de color[cite: 42]."
    },
    {
        id: 10,
        pregunta: "Para PCI Express el bit de envío tiene esta notación: [cite: 43]",
        opciones: [
            "RX [cite: 44]",
            "TX [cite: 45]",
            "3GIO [cite: 45]",
            "SX [cite: 45]"
        ],
        correcta: 1,
        explicacion: "TX identifica las líneas de Transmisión (envío de datos) [cite: 45], mientras que RX se usa para la Recepción[cite: 44]."
    },
    {
        id: 11,
        pregunta: "Cada canal (lane) de PCI Express hace uso de: [cite: 50]",
        opciones: [
            "1 línea de datos",
            "2 líneas de datos [cite: 51]",
            "4 líneas de datos [cite: 51]",
            "8 líneas de datos [cite: 51]"
        ],
        correcta: 1,
        explicacion: "Un carril PCIe consta de 2 líneas de datos diferenciales simplex (una TX de transmisión y una RX de recepción), sumando 4 hilos físicos[cite: 44, 45, 51]."
    },
    {
        id: 12,
        pregunta: "La frecuencia de reloj de referencia (tomada como base) para PCI Express es: [cite: 57]",
        opciones: [
            "100 MHz [cite: 58]",
            "200 MHz [cite: 58]",
            "50 MHz [cite: 59]",
            "500 MHz [cite: 59]"
        ],
        correcta: 0,
        explicacion: "El reloj base estándar (Base Clock) para la sincronización de enlaces PCI Express es de 100 MHz[cite: 57, 58]."
    }
];
