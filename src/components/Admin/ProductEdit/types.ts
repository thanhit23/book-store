export interface PropsEditProductComponent {
  onSubmit: (data: SubmitDataType) => void;
  detail: object;
}

export interface HandleSubmitType {
  file: object;
  discount: number;
  price: number;
  name: string;
  description: string;
}

export interface SubmitDataType {
  file: object;
  discount: number;
  price: number;
  name: string;
  description: string;
}
