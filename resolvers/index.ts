import { typeDefs } from "../schemas"
const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
    book(parent: any, args: any, context: any, info: any) {
      console.log(args)
      return books.find(book => book.id === Number(args.id));
    }
  },
}
