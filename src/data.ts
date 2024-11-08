import { Food } from "./app/shared/models/Food"
import { Tag } from "./app/shared/models/Tag"



export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Lip Kit',
    cookTime: '8 ml each',
    price: 20,
    favorite: true,
    origins: ['Korean'],
    stars: 4.5,
    imageUrl: 'https://www.laneige.com/int/en/skincare/__icsFiles/afieldfile/2020/04/06/rtb-lsm-03_1.jpg',
    tags: ['Lip','Combos'],
  },
  {
    id:'2',
    name: 'Lipbalm',
    price: 5,
    cookTime: '8 ml',
    favorite: true,
    origins: ['Korean'],
    stars: 4.7,
    imageUrl: 'https://i.pinimg.com/564x/12/8a/a8/128aa86a0841e8ebdf2099a208fb73f6.jpg',
    tags: ['Lip'],
  },
  {
    id:'3',
    name: 'Sleeping Mask',
    price: 15,
    cookTime: '50 ml',
    favorite: false,
    origins: ['Germany', 'Korean'],
    stars: 3.5,
    imageUrl: 'https://i.pinimg.com/564x/d3/b1/09/d3b109b69082c41487d2d8ea78bf9bf5.jpg',
    tags: ['Face'],
  },
  {
    id:'4',
    name: 'Mosturizer',
    price: 19,
    cookTime: '30 ml',
    favorite: true,
    origins: ['Korean'],
    stars: 3.3,
    imageUrl: 'https://i.pinimg.com/564x/ff/72/99/ff7299771d3af107d6a398889e5ce0ee.jpg',
    tags: ['Face','Best deals'],
  },
  {
    id:'5',
    name: 'Face Mist',
    price: 11,
    cookTime: '80 ml',
    favorite: false,
    origins: ['Australia','Korean'],
    stars: 3.0,
    imageUrl: 'https://sg.laneige.com/cdn/shop/products/Group3_73127525-55fb-48bd-bec2-1e5e6d94b5b2_300x300.jpg?v=1670393493',
    tags: ['Face','Mist'],
  },
  {
    id:'6',
    name: 'Face Kit',
    price: 50,
    cookTime: '40-50 ml',
    favorite: false,
    origins: ['Korean'],
    stars: 4.0,
    imageUrl: 'https://ph.laneige.com/cdn/shop/files/Featured_3_640x_c3260248-2db1-4409-acaa-6c7ad6ac3f2e_533x.jpg?v=1670394397',
    tags: ['Face','Combos','Best deals'],
  },
  {
    id:'7',
    name: 'Yellow Range Lipkit',
    price: 12,
    cookTime: '8 ml',
    favorite: false,
    origins: ['Korean'],
    stars: 4.0,
    imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30308792/2024/7/24/2c7ae4b3-cc3d-4d57-bb0d-f8826c1e7f521721816625347LANEIGESetofLipGlowyBalm10gLipSleepingMask20g-Mango1.jpg',
    tags: ['Lip','Best deals','Combos'],
  },
  {
    id:'8',
    name: 'Water Science Skicare Duo ',
    price: 16,
    cookTime: '45-50 ml',
    favorite: false,
    origins: ['Korean','US'],
    stars: 4.0,
    imageUrl: 'https://www.koreasnbymalaysia.com/wp-content/uploads/2021/08/Laneige-ACTIVE-WATER-DUO-SET-korean-men-skincare-cosmetic-product-online-shop-malaysia-China-Vietnam1.jpg',
    tags: ['Face','Combos'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 8 },
  { name: 'Face', count: 5 },
  { name: 'Lip', count: 3 },
  { name: 'Combos', count: 4 },
  { name: 'Best deals', count: 3 },
  { name: 'Mist', count: 1 },
]
