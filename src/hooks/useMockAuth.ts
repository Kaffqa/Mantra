import { useState, useCallback } from "react";
import type { ProfileWithSkills } from "@/types";
import { MOCK_CURRENT_USER } from "@/data/mock";

interface MockAuthState {
  isAuthenticated: boolean;
  isOnboardingComplete: boolean;
  user: ProfileWithSkills | null;
  isLoading: boolean;
}

export function useMockAuth() {
  const [state, setState] = useState<MockAuthState>({
    isAuthenticated: false,
    isOnboardingComplete: false,
    user: null,
    isLoading: false,
  });

  const signIn = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    setTimeout(() => {
      setState({
        isAuthenticated: true,
        isOnboardingComplete: true,
        user: MOCK_CURRENT_USER,
        isLoading: false,
      });
    }, 1000);
  }, []);

  const signUp = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    setTimeout(() => {
      setState({
        isAuthenticated: true,
        isOnboardingComplete: false,
        user: null,
        isLoading: false,
      });
    }, 1000);
  }, []);

  const completeOnboarding = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isOnboardingComplete: true,
      user: MOCK_CURRENT_USER,
    }));
  }, []);

  const signOut = useCallback(() => {
    setState({
      isAuthenticated: false,
      isOnboardingComplete: false,
      user: null,
      isLoading: false,
    });
  }, []);

  return {
    ...state,
    signIn,
    signUp,
    completeOnboarding,
    signOut,
  };
}
