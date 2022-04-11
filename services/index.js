import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { containsObject } from "../lib/utils";

export const useGetStorageItem = (storageKey) => {
  return useQuery(storageKey, async () => {
    const result = await AsyncStorage.getItem(storageKey);
    return result ? JSON.parse(result) : [];
  });
};

/* Add item to list stored in AsyncStorage
 * @param {string} storageKey
 * @param {object} item
 * @returns {Promise}
 *
 * @example
 * const updateSomeList = useAddStorageItem("someList");
 * updateSomeList.mutate(newItem);
 */
export const useAddStorageItem = (storageKey) => {
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

//update specific item in list stored in AsyncStorage
export const useUpdateStorageItem = (storageKey) => {
  const queryClient = useQueryClient();
  return useMutation(
    storageKey,
    async (newItem) => {
      const result = await AsyncStorage.getItem(storageKey);
      const currentList = result ? JSON.parse(result) : [];
      const newList = currentList.map((item) => {
        return item.name === newItem.name
          ? { ...item, selected: !item.selected }
          : item;
      });
      await AsyncStorage.setItem(storageKey, JSON.stringify(newList));
      return newList;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(storageKey),
    }
  );
};
