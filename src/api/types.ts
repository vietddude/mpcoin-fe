export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Wallet {
  id: string;
  address: string;
  balance: string;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: string;
  timestamp: string;
}
