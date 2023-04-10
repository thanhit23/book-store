export interface SubmitForm {
  content: string;
}

export interface Props {
  user: string | undefined;
  onSubmitEdit: (id: string, data: object) => void;
  onSubmit: (data: object) => void;
  listComment: [];
}

export interface ListComment {
  content: string;
  user: { username: string }[];
  createdAt: string;
  _id: string;
  userId: string;
}
