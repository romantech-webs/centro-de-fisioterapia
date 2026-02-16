export const clinic = {
  name: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez",
  logo: "/images/logo.png",
  tagline: "Tu fisioterapeuta de confianza en Madridejos",
  description: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez es tu clínica de fisioterapia especializada en Madridejos, Toledo. Dirigida por Ángel Rodríguez, ofrecemos diagnóstico avanzado con ecografía, tratamiento de lesiones deportivas y rehabilitación personalizada. Con 4.7 estrellas en Google, nuestros pacientes destacan nuestra capacidad para resolver lesiones complejas donde otros no han dado con la solución.",
  colors: {
    primary: "#ab9672",
    secondary: "#332d22",
    accent: "#696850",
    neutral: "#f8f7f4"
  },
  phone: "617 37 62 60",
  whatsapp: "+34617376260",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Ruiseñor, 52, 45710 Madridejos, Toledo, España",
    city: "Madridejos",
    province: "Toledo",
    postalCode: "45710",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=8078286259133452889&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Centro%20de%20Fisioterapia%20Madridejos%20%C3%81ngel%20Rodr%C3%ADguez%20Rodr%C3%ADguez%20%4039.4636%2C-3.52645&z=16&output=embed",
  coordinates: {
    lat: 39.4636,
    lng: -3.52645
  },
  schedule: [
    {
      days: "lunes",
      hours: "9:00–14:00, 16:00–19:00"
    },
    {
      days: "martes",
      hours: "9:00–13:30, 17:00–19:30"
    },
    {
      days: "miércoles",
      hours: "9:00–17:00"
    },
    {
      days: "jueves - viernes",
      hours: "9:00–14:00, 16:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.7,
    count: 20,
    url: "https://maps.google.com/?cid=8078286259133452889&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "TOMÁS RUBIO CERECEDA",
        rating: 5,
        text: "Tenía molestias en el hombro y después de 2 resonancias no me habían detectado nada. Ángel fue el primero mediante una ecografía en detectarme que tenía un pequeño hueso del hombro (Apófisis Coracoide) más grande lo normal y que el roce era lo que me producía el dolor. Hoy estoy recuperándome de la cirugía. MUCHAS GRACIAS ÁNGEL!",
        date: "Hace 6 años"
      },
      {
        author: "Miriam Martin Chacon",
        rating: 5,
        text: "Llevaba más de un año de fisio en fisio con una lesión con la que nadie daba con la solución. Gracias a Ángel he vuelto a correr sin dolor. El mejor profesional que he conocido y aún más grande como persona. Gracias.",
        date: "Hace un año"
      },
      {
        author: "Tony Laguna",
        rating: 5,
        text: "Un gran profesional, y mejor persona aún",
        date: "Hace un año"
      },
      {
        author: "Maria Sanchez Rodriguez",
        rating: 4,
        text: "Buen terapeuta súper amable y súper majo lo recomiendo te deja nuev@",
        date: "Hace 5 meses"
      }
    ]
  },
  services: [
    {
      id: "ecografia-diagnostica",
      name: "Ecografía Diagnóstica",
      description: "Realizamos diagnóstico por ecografía musculoesquelética para detectar lesiones que otras pruebas no han identificado. Esta tecnología nos permite visualizar en tiempo real tendones, músculos, ligamentos y estructuras óseas, identificando el origen exacto de tu dolor. Un diagnóstico preciso es el primer paso para una recuperación efectiva.",
      benefits: [
        "Detección precisa de lesiones no visibles en otras pruebas",
        "Diagnóstico inmediato durante la consulta",
        "Tratamiento dirigido al origen real del problema"
      ],
      icon: "Activity"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas y personas activas que necesitan volver a su actividad física sin dolor. Trabajamos lesiones de hombro, rodilla, tobillo y otras articulaciones con técnicas avanzadas. Nuestro objetivo es que recuperes tu rendimiento deportivo al 100%.",
      benefits: [
        "Recuperación completa para volver a correr y entrenar",
        "Prevención de recaídas y nuevas lesiones",
        "Planes personalizados según tu deporte"
      ],
      icon: "Dumbbell"
    },
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales expertos para aliviar el dolor, mejorar la movilidad articular y restaurar la función. Tratamos contracturas, bloqueos articulares y restricciones de movimiento con un enfoque personalizado. Cada sesión se adapta a tus necesidades específicas.",
      benefits: [
        "Alivio inmediato del dolor muscular y articular",
        "Mejora de la movilidad y flexibilidad",
        "Tratamiento sin medicación"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-lesiones-cronicas",
      name: "Tratamiento de Lesiones Crónicas",
      description: "Especialistas en resolver lesiones de larga duración que no han mejorado con otros tratamientos. Analizamos tu caso en profundidad para encontrar la causa real del problema y aplicar el tratamiento más efectivo. Muchos de nuestros pacientes llegan tras meses o años sin encontrar solución.",
      benefits: [
        "Solución definitiva a dolores persistentes",
        "Enfoque diferente cuando otros no han funcionado",
        "Análisis exhaustivo de la causa raíz"
      ],
      icon: "Target"
    },
    {
      id: "rehabilitacion-postquirurgica",
      name: "Rehabilitación Postquirúrgica",
      description: "Programas de rehabilitación tras cirugía ortopédica o traumatológica para recuperar la funcionalidad completa. Trabajamos en coordinación con tu cirujano para optimizar tu recuperación postoperatoria. Te acompañamos desde el postoperatorio inmediato hasta tu alta definitiva.",
      benefits: [
        "Recuperación más rápida y segura",
        "Seguimiento continuo de tu evolución",
        "Coordinación con tu equipo médico"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-hombro",
      name: "Tratamiento de Patología de Hombro",
      description: "Especialización en lesiones de hombro: tendinitis, bursitis, pinzamiento subacromial, roturas de manguito rotador y otras patologías. Utilizamos diagnóstico por ecografía para identificar la lesión exacta y aplicar el tratamiento más adecuado. Experiencia demostrada en casos complejos de hombro.",
      benefits: [
        "Diagnóstico preciso con ecografía",
        "Tratamiento específico para cada patología",
        "Recuperación de la movilidad completa"
      ],
      icon: "Target"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Técnica invasiva para el tratamiento de puntos gatillo miofasciales que causan dolor crónico y contracturas musculares. Especialmente efectiva en dolores persistentes de cuello, espalda y extremidades. Resultados rápidos en la eliminación del dolor muscular.",
      benefits: [
        "Alivio rápido de contracturas crónicas",
        "Eliminación de puntos gatillo activos",
        "Complemento ideal a la terapia manual"
      ],
      icon: "Zap"
    },
    {
      id: "electroterapia",
      name: "Electroterapia y Tecnología Avanzada",
      description: "Aplicamos tecnología de vanguardia con corrientes eléctricas terapéuticas, ultrasonidos y otras modalidades para acelerar tu recuperación. Estas técnicas complementan el tratamiento manual potenciando los resultados. Equipamiento de última generación para tu tratamiento.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de inflamación y dolor",
        "Tratamientos no invasivos y sin efectos secundarios"
      ],
      icon: "Zap"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llama al 617 37 62 60 o envíanos un WhatsApp para solicitar tu cita. Te atenderemos personalmente y encontraremos el mejor horario para ti en nuestra clínica de Madridejos."
    },
    {
      step: 2,
      title: "Valoración y Diagnóstico Completo",
      description: "Ángel realizará una evaluación exhaustiva de tu lesión o dolor. Si es necesario, utilizaremos ecografía diagnóstica para identificar con precisión el origen del problema y descartar lesiones no detectadas previamente."
    },
    {
      step: 3,
      title: "Tratamiento Personalizado",
      description: "Diseñamos un plan de tratamiento específico para tu caso, combinando fisioterapia manual, tecnología avanzada y las técnicas más efectivas para tu recuperación. Cada sesión se adapta a tu evolución."
    },
    {
      step: 4,
      title: "Seguimiento hasta tu Recuperación Total",
      description: "Te acompañamos durante todo el proceso con seguimiento continuo, ajustando el tratamiento según tus progresos hasta que recuperes completamente tu movilidad y puedas volver a tu vida activa sin dolor."
    }
  ],
  whyUs: [
    {
      title: "Valorados con 4.7 Estrellas por Nuestros Pacientes",
      description: "Con 20 reseñas en Google, nuestros pacientes destacan nuestra capacidad para resolver lesiones complejas, el trato cercano y profesional, y los resultados cuando otros tratamientos no han funcionado. Tu confianza es nuestro mejor aval.",
      icon: "Heart"
    },
    {
      title: "Diagnóstico Avanzado con Ecografía",
      description: "Somos de los pocos centros en Madridejos que realizan ecografía musculoesquelética. Esta tecnología nos permite detectar lesiones que resonancias y otras pruebas no identifican, como casos reales de nuestros pacientes demuestran. Un diagnóstico preciso es clave para tu recuperación.",
      icon: "Activity"
    },
    {
      title: "Especialistas en Casos Complejos",
      description: "Si llevas meses o años con dolor y has probado otros tratamientos sin éxito, podemos ayudarte. Ángel Rodríguez tiene amplia experiencia resolviendo lesiones crónicas y casos difíciles donde otros profesionales no han encontrado la solución. Enfoque diferente, resultados diferentes.",
      icon: "Target"
    },
    {
      title: "Atención Personalizada y Profesional",
      description: "En el Centro de Fisioterapia Madridejos recibirás un trato cercano y humano sin renunciar a la máxima profesionalidad. Ángel te atenderá personalmente, dedicando el tiempo necesario a tu caso y acompañándote en todo el proceso hasta tu recuperación completa.",
      icon: "Hand"
    }
  ],
  team: [
    {
      name: "Ángel Rodríguez Rodríguez",
      role: "Fisioterapeuta Director",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez - Imagen 3"
    }
  ],
  faq: [
    {
      question: "¿Qué diferencia al Centro de Fisioterapia Madridejos de otras clínicas?",
      answer: "Nuestro principal diferencial es el diagnóstico por ecografía musculoesquelética, que nos permite detectar lesiones que otras pruebas no identifican. Además, Ángel Rodríguez cuenta con amplia experiencia resolviendo casos complejos donde otros profesionales no han encontrado solución. Nuestros pacientes destacan especialmente nuestra capacidad diagnóstica y el trato cercano y profesional."
    },
    {
      question: "¿Necesito que me deriven desde mi médico para pedir cita?",
      answer: "No es necesaria ninguna derivación médica para acudir a nuestro centro de fisioterapia en Madridejos. Puedes solicitar cita directamente llamando al 617 37 62 60. Si tienes informes médicos previos, resonancias o radiografías, tráelos a la primera consulta ya que nos ayudarán en el diagnóstico."
    },
    {
      question: "¿Realizáis diagnóstico por ecografía en la misma consulta?",
      answer: "Sí, disponemos de ecógrafo en la clínica y Ángel está formado en ecografía musculoesquelética. Esto nos permite realizar el diagnóstico durante tu primera visita, identificando lesiones en tendones, músculos, ligamentos y estructuras óseas en tiempo real. Es especialmente útil cuando otras pruebas como resonancias no han detectado la causa del dolor."
    },
    {
      question: "¿Tratáis lesiones deportivas y ayudáis a volver a correr?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades. Tratamos lesiones de running, fútbol, pádel y otros deportes. Muchos de nuestros pacientes han vuelto a correr sin dolor después de meses de molestias. Diseñamos planes de recuperación progresivos que te permiten retomar tu actividad deportiva de forma segura y definitiva."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "El número de sesiones depende del tipo de lesión, su gravedad y tu respuesta al tratamiento. En la primera valoración en el Centro de Fisioterapia Madridejos te daremos una estimación aproximada. Algunas molestias agudas mejoran en 3-5 sesiones, mientras que lesiones crónicas o postquirúrgicas pueden requerir más tiempo. Siempre priorizamos tu recuperación completa sobre la rapidez."
    },
    {
      question: "¿Atendéis urgencias o solo con cita previa?",
      answer: "Trabajamos principalmente con cita previa para garantizar la atención personalizada que cada paciente merece. Sin embargo, si tienes una lesión aguda o dolor intenso, llámanos al 617 37 62 60 y haremos todo lo posible por atenderte lo antes posible, buscando un hueco en la agenda de Ángel."
    },
    {
      question: "¿Qué hago si llevo meses de fisio en fisio sin mejorar?",
      answer: "Muchos de nuestros pacientes llegan en esta situación y es precisamente donde más podemos ayudarte. Nuestro enfoque diagnóstico con ecografía y la experiencia de Ángel en casos complejos nos permite identificar problemas que otros profesionales no han detectado. Te recomendamos pedir cita para una valoración completa donde analizaremos tu caso desde una perspectiva diferente."
    },
    {
      question: "¿Dónde está ubicado el centro en Madridejos?",
      answer: "Estamos ubicados en Madridejos, Toledo. Cuando solicites tu cita llamando al 617 37 62 60, te indicaremos la dirección exacta y cómo llegar. Disponemos de fácil acceso y aparcamiento cercano para tu comodidad."
    }
  ],
  seo: {
    titleTemplate: "%s | Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez",
    defaultTitle: "Fisioterapia Madridejos | Centro Ángel Rodríguez",
    defaultDescription: "Centro de Fisioterapia en Madridejos, Toledo. Diagnóstico con ecografía, tratamiento de lesiones deportivas y rehabilitación. Valorados 4.7★. Llama al 617 37 62 60",
    keywords: [
      "fisioterapia Madridejos",
      "fisioterapeuta Madridejos",
      "Centro Fisioterapia Ángel Rodríguez",
      "ecografía musculoesquelética Madridejos",
      "fisioterapia deportiva Madridejos Toledo",
      "tratamiento lesiones Madridejos",
      "rehabilitación Madridejos",
      "fisio Madridejos",
      "dolor hombro Madridejos",
      "lesiones crónicas Toledo",
      "fisioterapia Toledo",
      "Ángel Rodríguez fisioterapeuta"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Centro de Fisioterapia Madridejos Ángel Rodríguez Rodríguez",
    cif: "",
    registeredAddress: "C. Ruiseñor, 52, 45710 Madridejos, Toledo, España, Madridejos, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Madridejos"
  ],
  heroDescription: "En nuestro centro de Madridejos encontrarás un diagnóstico preciso y tratamientos personalizados que te devolverán la movilidad sin dolor. Utilizamos tecnología avanzada como ecografía diagnóstica y técnicas especializadas para tratar desde lesiones deportivas hasta dolores crónicos que otros profesionales no han podido resolver.",
  specialty: "Diagnóstico y Tratamiento Especializado",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Llevas tiempo con dolor y no encuentras solución?",
  ctaDescription: "Reserva tu cita en el Centro de Fisioterapia Madridejos y descubre por qué nuestros pacientes nos valoran con 4.7 estrellas. Te ayudaremos a recuperar tu bienestar.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
