interface ProductModel {
  truckNumber: string;
  lrNo: string;
  rate: number;
  quantity: number;
  particular: string;
  amount: number;
  date: Date;
}
interface BillModal {
  id: string;
  date: string;
  companyName: string;
  compnayAddress: string;
  company: string;
  total: number;
  advance: number;
  depart: string;
  destination: string;
  product:Array<ProductModel>
}


export type { BillModal };
