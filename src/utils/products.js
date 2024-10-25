//mac
import mac00 from "../assets/products-images/mac/mac00.png"
import mac01 from "../assets/products-images/mac/mac01.png"
import mac02 from "../assets/products-images/mac/mac002.png"
import mac03 from "../assets/products-images/mac/mac03.png"
import mac04 from "../assets/products-images/mac/imac2020.png"
import mac05 from "../assets/products-images/mac/mac06.png"

// iphone-Features
import feature1 from "../assets/products-images/iphone/feature1.jpg"
import feature2 from "../assets/products-images/iphone/feature2.jpg"
import feature3 from "../assets/products-images/iphone/feature3.jpg"

// iphone
import iPhone00 from "../assets/products-images/iphone/iPhone00.png"
import iPhone01 from "../assets/products-images/iphone/iPhone01.png"
import iPhone02 from "../assets/products-images/iphone/iPhone02.png"
import iPhone03 from "../assets/products-images/iphone/iPhone03.png"
import iPhone04 from "../assets/products-images/iphone/iPhone04.png"
import iPhone05 from "../assets/products-images/iphone/iPhone05.png"
import iPhone06 from "../assets/products-images/iphone/iPhone06.png"

// airpods
import img1 from "../assets/products-images/airpod/img1.png"
import img2 from "../assets/products-images/airpod/img2.png"
import img3 from "../assets/products-images/airpod/img3.png"
import img4 from "../assets/products-images/airpod/img4.png"
import img5 from "../assets/products-images/airpod/img5.png"
import img6 from "../assets/products-images/airpod/img6.png"

const iphoneFeature = {
  feature1 :{
    image: feature1,
    title: 'Apple Intelligence',
    description: 'Powerful possibilities.'
  },
  feature2: {
    image: feature2,
    title: 'Cutting-Edge Cameras',
    description: 'Picture your best photos and videos.'
  },
  feature3: {
    image: feature3,
    title: 'Peace of Mind',
    description: 'Helpful safety features. Just in case.'
  }
}

const mac = {
  mac00: {
    title: 'Macbook Air 13 with M1 Chip',
    slug: 'macbook-air-with-m1-chip',
    image: mac00,
    category: 'Mac',
    price: 999,
    description: 'The MacBook Air 13 is a sleek and lightweight laptop designed for portability and performance. Featuring Apple M1 chip, this device offers impressive speed, efficiency, and a long battery life, making it ideal for students and professionals alike',
  },
  mac01: {
    title: 'Macbook Air 14 with M2 Chip',
    slug: 'macbook-air-with-m2-chip',
    image: mac01,
    category: 'Mac',
    price: 1199,
    description: 'The MacBook Air 14 takes everything that made its predecessor great and enhances it with a larger display and more powerful features. Equipped with Apple M2 chip, the MacBook Air 14 delivers exceptional performance while maintaining the same iconic design. It is perfect for creative professionals and power users who demand more from their devices. ',
  },
  mac02: {
    title: 'Macbook Pro 14',
    slug: 'macbook-pro-14',
    image: mac02,
    category: 'Mac',
    price: 1299,
    description: 'The MacBook Pro 14 is a high-performance laptop powered by Apple’s M1 Pro or M1 Max chip. Featuring a vibrant Liquid Retina XDR display, it excels in demanding tasks like video editing and software development. With long battery life and advanced connectivity, its the perfect choice for professionals seeking power and portability.',
  },
  mac03: {
    title: 'iMac 24"',
    slug: 'imac-24',
    image: mac03,
    category: 'Mac',
    price: 1299,
    description: 'The iMac 24 is a sleek all-in-one desktop featuring Apple’s M1 chip, a stunning 24-inch 4.5K Retina display, and vibrant colors. It delivers powerful performance and elegant design, perfect for both work and entertainment.',
  },
  mac04: {
    title: 'iMac 2020',
    slug: 'imac-2020',
    image: mac04,
    category: 'Mac',
    price: 699,
    description: ' The iMac 2020 features a classic design with powerful performance powered by Intel processors. Equipped with a stunning Retina 4K display, it delivers vibrant visuals for creative tasks.',
  },
  mac05: {
    title: 'Studio Display',
    slug: 'studio-display',
    image: mac05,
    category: 'Mac',
    price: 1599,
    description: 'The Studio Display is a 27-inch 5K Retina monitor featuring exceptional color accuracy, built-in speakers, and a 12MP Ultra Wide camera, designed to enhance productivity for creative professionals.',
  },
}

const iphone = {
  iphone02: {
    title: 'iPhone 13 Pro',
    slug: 'iphone-13-Pro',
    image: iPhone00,
    category: 'iPhone',
    price: 999,
    description: 'A 6.1-inch ProMotion display with a 120Hz refresh rate, A15 Bionic chip, and a powerful triple-camera system, designed for pro-level photography and gaming.',
  },
  iphone03: {
    title: 'iPhone 13',
    slug: 'iphone-13',
    image: iPhone01,
    category: 'iPhone',
    price: 699,
    description: 'Featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and advanced dual-camera system, offering enhanced performance and battery life.',
  },
  iphone04: {
    title: 'iPhone SE',
    slug: 'iphone-se',
    image: iPhone02,
    category: 'iPhone',
    price: 429,
    description: ' A compact 4.7-inch display with the A15 Bionic chip, offering powerful performance in a classic design with a single 12MP rear camera.',
  },
  iphone05: {
    title: 'iPhone 12',
    slug: 'iphone-12',
    image: iPhone03,
    category: 'iPhone',
    price: 599,
    description: 'Sporting a 6.1-inch Super Retina XDR display and A14 Bionic chip, it delivers 5G capability with a dual-camera system for excellent photography.',
  },
  iphone06: {
    title: 'iPhone 11',
    slug: 'iphone-11',
    image: iPhone04,
    category: 'iPhone',
    price: 499,
    description: 'A 6.1-inch Liquid Retina display with the A13 Bionic chip, featuring a dual-camera system and longer battery life, known for its vibrant colors.',
  },
}

const appleWatch = {
  watch00: {
    title: 'Apple Watch Series 7',
    slug: 'apple-watch-series-7',
    image: './apple-watch/watch00.png',
    category: 'Apple Watch',
    price: 399,
    description: '',
  },
  watch01: {
    title: 'Apple Watch SE',
    slug: 'apple-watch-se',
    image: './apple-watch/watch01.png',
    category: 'Apple Watch',
    price: 279,
    description: '',
  },
  watch02: {
    title: 'Apple Watch Series 3',
    slug: 'apple-watch-series-3',
    image: './apple-watch/watch02.png',
    category: 'Apple Watch',
    price: 199,
    description: '',
  },
  watch03: {
    title: 'Apple Watch Nike',
    slug: 'apple-watch-nike',
    image: './apple-watch/watch03.png',
    category: 'Apple Watch',
    price: 399,
    description: '',
  },
  watch04: {
    title: 'Apple Watch Hermès',
    slug: 'apple-watch-hermes',
    image: './apple-watch/watch04.png',
    category: 'Apple Watch',
    price: 1229,
    description: '',
  },
}

const ipad = {
  ipad00: {
    title: 'iPad Pro',
    slug: 'ipad-pro',
    image: './ipad/ipad00.png',
    category: 'iPad',
    price: 799,
    description: '',
  },
  ipad01: {
    title: 'iPad Air',
    slug: 'ipad-air',
    image: './ipad/ipad01.png',
    category: 'iPad',
    price: 599,
    description: '',
  },
  ipad02: {
    title: 'iPad',
    slug: 'ipad',
    image: './ipad/ipad02.png',
    category: 'iPad',
    price: 329,
    description: '',
  },
  ipad03: {
    title: 'iPad mini',
    slug: 'ipad-mini',
    image: './ipad/ipad03.png',
    category: 'iPad',
    price: 499,
    description: '',
  },
}

const airPods = [
  {
    image: img1,
    sliderTitle: 'TECH RAFT',
    price: '$99',
    topic: 'SONICPULSE',
    shortDescription: 'Experience unparalleled sound clarity with ergonomic design.',
    detailTitle: 'SONICPULSE-1A',
    detailDescription: 'Experience deep bass and dynamic sound for an immersive audio journey.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
  {
    image: img2,
    sliderTitle: 'TECH RAFT',
    price: '$119',
    topic: 'ECHOBEAT',
    shortDescription: 'Stay immersed in music with noise-canceling technology.',
    detailTitle: 'ECHOBEAT B12',
    detailDescription: 'Enjoy crystal-clear sound and superior noise isolation for pure listening pleasure. Immerse yourself in every note and detail of your favorite tracks.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
  {
    image: img3,
    sliderTitle: 'TECH RAFT',
    price: '$79',
    topic: 'BASSBLISS',
    shortDescription: 'Lightweight earbuds delivering deep bass and crisp highs.',
    detailTitle: 'BASSBLISS A50',
    detailDescription: 'Delivering powerful bass and rich tones for music lovers. Feel the rhythm and let the music take over.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
  {
    image: img4,
    sliderTitle: 'TECH RAFT',
    price: '$82',
    topic: 'TUNEIN',
    shortDescription: 'Designed for all-day comfort with superior battery life.',
    detailTitle: 'TUNEIN BUD-2',
    detailDescription: 'A lightweight design with customizable sound profiles for personalized listening. Tailor your audio experience.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
  {
    image: img5,
    sliderTitle: 'TECH RAFT',
    price: '$95',
    topic: 'WAVEFLOW',
    shortDescription: 'Seamlessly switch between devices with Bluetooth-5.0.',
    detailTitle: 'WAVEFLOW 360',
    detailDescription: 'Seamless connectivity and water resistance for on-the-go adventures. Whether at the gym or outdoors, enjoy music without limits.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
  {
    image: img6,
    sliderTitle: 'TECH RAFT',
    price: '$129',
    topic: 'PUREVIBE',
    shortDescription: 'Sweat and water-resistant earbuds for your most intense workouts.',
    detailTitle: 'PUREVIBE Z',
    detailDescription: 'A stylish design, vibrant colors and balanced sound. Elevate your audio with flair and functionality.',
    specifications: [
      { name: 'Used Time', value: '6 hours' },
      { name: 'Charging', value: 'Type-C' },
      { name: 'Compatible', value: 'Android' },
      { name: 'Bluetooth', value: '5.3' },
    ]
  },
];

export default {
  mac,
  iphone,
  appleWatch,
  ipad,
  iphoneFeature,
  airPods
}