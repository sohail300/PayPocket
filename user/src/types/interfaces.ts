export interface User {
  id: string;
  number: string;
}

export interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: number;
  status: "Failure" | "Pending" | "Success";
  type: "withdraw" | "deposit" | "transfer";
}
