export interface Props {
  listComment: {
    _id: string;
    content: string;
    user: { username: string }[];
    createdAt: string;
  }[];
  deleteComment: (id: string) => void;
}
