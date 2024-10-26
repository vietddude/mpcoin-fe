import apiClient from "./client";
import { User, Wallet, Transaction } from "./types";
import {
  mockUser,
  mockWallet,
  mockTransactions,
  mockSignupResponse,
} from "./mockData";
import { mockDelay } from "./utils";

const USE_MOCK_DATA = true; // Set this to false to use real API endpoints

export const userApi = {
  getCurrentUser: () =>
    USE_MOCK_DATA
      ? Promise.resolve({ data: mockUser })
      : apiClient.get<User>("/user"),
  updateUser: (userData: Partial<User>) =>
    USE_MOCK_DATA
      ? Promise.resolve({ data: { ...mockUser, ...userData } })
      : apiClient.put<User>("/user", userData),
};

export const walletApi = {
  getWallet: () =>
    USE_MOCK_DATA
      ? Promise.resolve({ data: mockWallet })
      : apiClient.get<Wallet>("/wallet"),
  createWallet: () =>
    USE_MOCK_DATA
      ? Promise.resolve({ data: mockWallet })
      : apiClient.post<Wallet>("/wallet"),
};

export const transactionApi = {
  getTransactions: () =>
    USE_MOCK_DATA
      ? Promise.resolve({ data: mockTransactions })
      : apiClient.get<Transaction[]>("/transactions"),
  createTransaction: (transactionData: Partial<Transaction>) =>
    USE_MOCK_DATA
      ? Promise.resolve({
          data: {
            ...transactionData,
            id: String(mockTransactions.length + 1),
            timestamp: new Date().toISOString(),
          } as Transaction,
        })
      : apiClient.post<Transaction>("/transactions", transactionData),
};

export const authApi = {
  signup: (credentials: { email: string; password: string }) =>
    USE_MOCK_DATA
      ? mockDelay().then(() => ({ data: mockSignupResponse }))
      : apiClient.post<User>("/auth/signup", credentials),
};
