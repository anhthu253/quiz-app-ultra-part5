interface ICard {
  id?: string;
  key?: string;
  question: string;
  answer: string;
  tags: string[];
  bookmarked: boolean;
}

export default ICard;
