export const ProdItem = ({ data }) => {
  data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  });

  return data.map((e) => {
    return (
      <li key={e.name} className="prod-item category-item">
        <img className="prod-img" src={e.img} alt={e.img} />
        <span className="brand-name">{e.brand}</span>
        <span>{e.name}</span>
        <span>{Number(e.price).toLocaleString()}원</span>
      </li>
    );
  });
};
