function Details({ renderData }) {
  return (
    <>
      {renderData.map((data, idx) => (
        <section key={idx} className="container mt-8">
          <div className=" bg-white rounded-xl p-4">
            <div className="text-center">
              <h1 className="font-bold text-xl lg:text-2xl text-center">
                {data?.word}
              </h1>
              <span className="font-medium">{data?.phonetic}</span>
            </div>
            <div className="mt-4">
              {data?.phonetics.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center mt-2">
                  <span>{data?.text}</span>
                  <audio src={data?.audio} type="audio/mpeg" controls></audio>
                </div>
              ))}
            </div>
            <div className="mt-5 border rounded-md p-3">
              {data?.meanings?.map((data, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="font-bold text-xl lg:text-2xl mb-1">
                    {data?.partOfSpeech}
                  </h3>
                  <div>
                    {data?.definitions.map((defi, idx) => (
                      <p key={idx}>{defi?.definition}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default Details;
