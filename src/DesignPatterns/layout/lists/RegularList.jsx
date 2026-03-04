function RegularList({ items, sourceName, ItemComponent }) {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent {...{ [sourceName]: item }} key={i} />
      ))}
    </div>
  );
}

export default RegularList;
