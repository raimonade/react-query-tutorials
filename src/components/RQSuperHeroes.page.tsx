import useSuperHeroesData, { Hero } from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const onError = (error) => {
    console.log("Error", error);
  };
  const onSuccess = (data) => {
    console.log("Success", data);
  };

  const { data, error, isLoading, isError, refetch, isFetching, fetchStatus } =
    useSuperHeroesData(onSuccess, onError);

  if ((fetchStatus !== "idle" && isLoading) || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      <button onClick={() => refetch()}>Fetch Heroes</button>
      {data?.data.map((hero: Hero) => {
        return <div key={hero.id}>{hero?.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
