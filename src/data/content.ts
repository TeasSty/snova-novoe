export const contact = {
  phone: '+7 (963) 879-72-24',
  phoneHref: 'tel:+79638797224',
  email: 'snova.novoe@gmail.com',
  emailHref: 'mailto:snova.novoe@gmail.com',
  address: 'Пермь, ул. Дружбы, 34К',
  mapHref: 'https://yandex.ru/maps/?text=Пермь%2C%20ул.%20Дружбы%2C%2034К',
  vk: 'https://vk.ru/snovanovoe',
  instagram: 'https://www.instagram.com/snovanovoe/',
  telegram: 'https://t.me/snovanovoerest',
  people: ['Никита Гилев', 'Ольга Гилева'],
} as const

export type PassportFields = {
  wood: string
  era: string
  find: string
  work: string
}

/** How the passport gesture appears for this work — avoid repeating the full card. */
export type PassportMode = 'full' | 'stamp' | 'caption' | 'none'

export type WorkItem = {
  id: string
  title: string
  image: string
  note: string
  passport: PassportFields
  mode: PassportMode
  layout: 'overlap' | 'shift-right' | 'wide-caption' | 'compact'
}

export const heroPassport: PassportFields = {
  wood: 'массив',
  era: 'под заказ',
  find: 'необрезная доска',
  work: 'столешница, масло',
}

export const works: WorkItem[] = [
  {
    id: 'chair',
    title: 'Стул',
    image: './images/work-chair.jpg',
    note: 'Фото из альбома «Винтаж» VK — готовый стул мастерской.',
    mode: 'full',
    layout: 'overlap',
    passport: {
      wood: 'массив',
      era: 'винтаж',
      find: 'износ сиденья и лака',
      work: 'циклевание, масло, сборка',
    },
  },
  {
    id: 'chair-soft',
    title: 'Стул с мягким сиденьем',
    image: './images/work-pouf.jpg',
    note: 'Стул с ротангом и обивкой — из каталога мастерской VK.',
    mode: 'stamp',
    layout: 'shift-right',
    passport: {
      wood: 'массив + ткань',
      era: 'винтаж',
      find: 'износ обивки',
      work: 'дерево, перетяжка',
    },
  },
  {
    id: 'wardrobes',
    title: 'Парные шкафы',
    image: './images/work-throne.jpg',
    note: 'Два шкафа после реставрации — из альбома «Работы» VK.',
    mode: 'caption',
    layout: 'wide-caption',
    passport: {
      wood: 'массив',
      era: 'винтаж',
      find: 'потёртости, старый лак',
      work: 'реставрация комплекта',
    },
  },
  {
    id: 'desk',
    title: 'Стол из массива',
    image: './images/hero-sideboard.jpg',
    note: 'Стол со слэб-столешницей — из альбома «Наши изделия» VK.',
    mode: 'none',
    layout: 'compact',
    passport: {
      wood: 'массив',
      era: 'под заказ',
      find: '—',
      work: 'изготовление',
    },
  },
]

export const services = [
  {
    title: 'Реставрация',
    text: 'Деревянная и мягкая мебель, часы, реликвии. Оценка по фото или в мастерской.',
  },
  {
    title: 'Изготовление из массива',
    text: 'Авторские вещи и предметы под заказ из цельного дерева.',
  },
  {
    title: 'Мастер-классы',
    text: 'Можно принести свой предмет или работать с вещью мастерской. Инструмент и материалы на месте, запись заранее.',
  },
  {
    title: 'Аренда',
    text: 'Пространство мастерской — подробности в сообществе VK.',
  },
] as const

export const cityFacts = [
  {
    title: 'Наличники и двери',
    text: 'Снимали с аварийных деревянных домов перед сносом. Часть стала рамами для зеркал — например, в ресторане «Усаги».',
  },
  {
    title: 'Половая доска',
    text: 'Широкая вековая доска (до 30–40 см) ушла в столешницы для ресторанов «Крапива», «Усаги», «Умамикатико».',
  },
  {
    title: 'Город и сцена',
    text: 'Работы мастерской бывали на Дягилевском фестивале, в Старокирпичном переулке и в спектаклях «Сцена-Молот».',
  },
] as const

export const shopFloor = [
  {
    src: './images/city-frames.jpg',
    alt: 'Отреставрированный резной наличник',
    caption: 'Наличник',
  },
  {
    src: './images/work-chair.jpg',
    alt: 'Отреставрированный стул',
    caption: 'Стул',
  },
  {
    src: './images/hero-sideboard.jpg',
    alt: 'Стол из массива со слэб-столешницей',
    caption: 'Стол',
  },
] as const
