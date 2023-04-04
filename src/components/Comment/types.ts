export interface SubmitForm {
  content: string;
}

export interface Props {
  onSubmit: (data: object) => void;
  listComment: [];
}

export interface ListComment {
  content: string;
  user: { username: string }[];
  createdAt: string;
}
