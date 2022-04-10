import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { containsObject } from "../lib/utils";

export const useGetStorage = (storageKey) => {
  return useQuery(storageKey, async () => {
    const result = await AsyncStorage.getItem(storageKey);
    return result ? JSON.parse(result) : [];
  });
};

export const useUpdateStorage = (storageKey) => {
  const queryClient = useQueryClient();

  return useMutation(
    storageKey,
    async (item) => {
      const result = await AsyncStorage.getItem(storageKey);
      const currentList = result ? JSON.parse(result) : [];
      const isDuplicate = containsObject(item, currentList);
      const newList = isDuplicate ? [...currentList] : [...currentList, item];
      if (!isDuplicate)
        await AsyncStorage.setItem(storageKey, JSON.stringify(newList));
      return newList;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(storageKey),
    }
  );
};

export const useGetSymptoms = () =>
  useQuery(["@symptoms"], () => fetchSymptoms());

const fetchSymptoms = async () => {
  const { data } = await axios.get(
    `https://mockend.com/oliviermtl/test-react-native/Symptoms`
  );
  return data;
};
