import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export interface Hero {
  id: number;
  name: string;
  alterEgo: string;
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery<AxiosResponse<Hero[]>, AxiosError>(
    ["super-heroes"],
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
    }
  );
};

export default useSuperHeroesData;
