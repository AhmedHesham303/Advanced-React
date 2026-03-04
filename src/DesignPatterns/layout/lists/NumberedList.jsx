function NumberedList({ items, sourceName, ItemComponent }) {
  return (
    <div>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} key={i} />
        </>
      ))}
    </div>
  );
}

export default NumberedList;
