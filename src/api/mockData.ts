import { User, Wallet, Transaction } from "./types";

export const mockUser: User = {
  id: "1",
  email: "user@example.com",
  name: "John Doe",
};

export const mockWallet: Wallet = {
  id: "1",
  address: "0x1234567890123456789012345678901234567890",
  balance: "100.5",
};

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    from: "0x1234567890123456789012345678901234567890",
    to: "0x0987654321098765432109876543210987654321",
    amount: "10.5",
    timestamp: "2023-04-01T12:00:00Z",
  },
  {
    id: "2",
    from: "0x0987654321098765432109876543210987654321",
    to: "0x1234567890123456789012345678901234567890",
    amount: "5.25",
    timestamp: "2023-04-02T14:30:00Z",
  },
];

export const mockSignupResponse = {
  payload: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTBjZDg1MWYtZWMwYS00ZmYzLTg2MWMtZjMxZGVhYWUxYjNhIiwidHlwZSI6ImFjY2VzcyIsImV4cCI6MTcyOTg0NDg2MCwiaWF0IjoxNzI5ODQxMjYwfQ.wRm1jYw_7rFWuu6p_7qGbHuQik_D_nJwUVQo6WHhdEw",
    refresh_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTBjZDg1MWYtZWMwYS00ZmYzLTg2MWMtZjMxZGVhYWUxYjNhIiwidHlwZSI6InJlZnJlc2giLCJleHAiOjE3Mjk5NDkyNjAsImlhdCI6MTcyOTg0MTI2MH0.aLs028PlaYu-4VpoyUsAGuJq5qhP9GFL47qG19fjYYg",
    user: {
      id: "90cd851f-ec0a-4ff3-861c-f31deaae1b3a",
      email: "viet2@mail.to",
    },
    wallet: {
      id: "0f3eca23-61c6-481d-ab6e-9a59d73390c9",
      user_id: "90cd851f-ec0a-4ff3-861c-f31deaae1b3a",
      address: "0x15bc669EF0C91F717A62ef9B17d9eeDa1C8C00B6",
    },
  },
};
