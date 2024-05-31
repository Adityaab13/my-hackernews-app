import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { INewsStore } from './newsStore';

// Custom hook to access the MobX stores provided by the MobX Provider
export function useStore(): { newsStore: INewsStore } {
  // Use the useContext hook to access the stores from MobXProviderContext
  const stores = useContext(MobXProviderContext);

  // Ensure that the store is available, and throw an error if it's not
  if (!stores) {
    throw new Error('useStore must be used within a MobX Provider');
  }

  // Return the stores to be used in components
  return stores as { newsStore: INewsStore };
}
