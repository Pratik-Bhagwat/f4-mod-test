function History({ prevSearchData }) {
  return (
    <section className="container mt-5">
      <div className="flex flex-col">
        {prevSearchData.map((data, idx) => (
          <a
            key={idx}
            className="text-lg lg:hover:cursor-pointer text-blue-700 underline"
          >
            {data}
          </a>
        ))}
      </div>
    </section>
  );
}
export default History;
