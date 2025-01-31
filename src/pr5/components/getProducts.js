const products = [
  {
    id: "h-1",
    name: "Burger 1",
    photo:
      "https://media.istockphoto.com/id/495204032/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B5-%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D1%8B%D0%B5-%D0%B3%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80.jpg?s=612x612&w=0&k=20&c=9tdnvxvI6Kaw9mGmiYSZZUkos0s6_yBNTgzPDiuQAcU=",
  },
  {
    id: "h-2",
    name: "Burger 2",
    photo:
      "https://roll-club.kh.ua/wp-content/uploads/2023/11/azian-stail-900h600-900x600.jpg",
  },
  {
    id: "h-3",
    name: "Burger 3",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrTUzuLEVBCFGTifZd9-lZdwfxZ9jIphRaKYfeixrgayt5WCAqwYd0cemiMgUqrWCvMg&usqp=CAU",
  },
  {
    id: "s-1",
    name: "Hot Dog 1",
    photo:
      "https://images.gastronom.ru/EgeRAvZr5uieLU3HG5Do-YZMxMKY7aq29aDHkks7tyM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNhNmFmZWY3LTE3N2YtNGRhOC1hMWI3LWJiZTEyZmVjOGM1Yi5qcGc.webp",
  },
  {
    id: "s-2",
    name: "Hot Dog 2",
    photo:
      "https://www.shutterstock.com/image-photo/hot-dogs-grilled-boiled-sausages-260nw-2535555783.jpg",
  },
  {
    id: "s-3",
    name: "Hot Dog 3",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSCC7XROQApayH_LcTEfIdyMOtDCYuNO1_g&s",
  },
  {
    id: "p-1",
    name: "Pizza 1",
    photo:
      "https://media.istockphoto.com/id/1442417585/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D0%B5%D1%82-%D0%BA%D1%83%D1%81%D0%BE%D1%87%D0%B5%D0%BA-%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8.jpg?s=612x612&w=0&k=20&c=iXyj27EYo3EKZuucF-Njy_Q04-fdDYnjv1FENubixHY=",
  },
  {
    id: "p-2",
    name: "Pizza 2",
    photo: "https://roll-club.kh.ua/wp-content/uploads/2022/12/9.jpg",
  },
  {
    id: "p-3",
    name: "Pizza 3",
    photo:
      "https://roll-club.dp.ua/wp-content/uploads/2024/02/pizza-recipe.jpg",
  },
];

export default function getProducts() {
  return products;
}
