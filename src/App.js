import Cart from "./components/Cart";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const catalog = [
    {
      id: 1,
      img: "/images/sneakers/1.jpg",
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: "11 599 руб.",
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/i?id=e16c09ae66a406fd62d56872c1879b2f-4872086-images-thumbs&n=13",
      title: "sticky fingers",
      price: "100 000",
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/i?id=7c31bc7aaa3cf1f7ffd5d7e9deedd4a0-5009165-images-thumbs&n=13",
      title: "billy",
      price: "300 $",
    },
    {
      id: 4,
      img: "/images/sneakers/2.jpg",
      title: "Мужские Кроссовки Nike Air Max 270",
      price: "12 999 руб.",
    },
  ];

  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex ">
          {catalog.map((item) => (
            <Card
              img={item.img}
              key={item.id}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
