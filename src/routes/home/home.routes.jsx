import { Directory } from "../../components/directory/directory.components";

export const Home = () => {
  const meals = [
    {
      id: 1,
      title: "Pizza",
      image:
        "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg",
    },
    {
      id: 2,
      title: "Burger",
      image:
        "https://c4.wallpaperflare.com/wallpaper/197/854/431/fire-burger-5k-steak-wallpaper-preview.jpg",
    },
    {
      id: 3,
      title: "Cakes",
      image:
        "https://www.fabmood.com/inspiration/wp-content/uploads/2020/10/cake-idea-12.jpg",
    },
    {
      id: 4,
      title: "Ice Cream",
      image:
        "https://images.indianexpress.com/2021/07/ice-cream-pixabay-1200.jpg",
    },
    {
      id: 5,
      title: "Beverages",
      image:
        "https://www.jbtc.com/foodtech/wp-content/uploads/sites/2/2021/08/Juice-Beverage.jpeg",
    },
  ];

  return <Directory meals={meals} />;
};
