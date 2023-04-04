export interface Props {
  children: JSX.Element;
  onSendToken: (token: string) => void;
  notToken: () => void;
}
