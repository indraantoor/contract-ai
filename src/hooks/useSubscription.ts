import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useCurrentUser } from './useCurrentUser';

export function useSubscription() {
  const { isLoading: isUserLoading, isError: isUserError } = useCurrentUser();
  const [loading, setLoading] = useState<boolean>(true);

  const {
    data: subscriptionStatus,
    isLoading: isSubscriptionLoading,
    isError: isSubscriptionError,
  } = useQuery({
    queryKey: ['subscriptionStatus'],
    queryFn: fetchSubscriptionStatus,
    // enabled: !!user,
  });

  async function fetchSubscriptionStatus() {
    const response = await api.get('/payments/membership-status');
    if (response.status !== 200) {
      throw new Error('Failed to fetch subscription status');
    }

    return response.data;
  }

  return {
    subscriptionStatus,
    isUserLoading,
    isUserError,
    isSubscriptionLoading,
    isSubscriptionError,
    loading,
    setLoading,
  };
}
