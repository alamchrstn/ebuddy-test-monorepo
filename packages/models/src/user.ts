export type User = {
  firstName: string;
  lastName: string;
  numberOfRents: number;
  recentlyActive: number;
  totalAverageWeightRatings: number;
  username: string;
};

export type UserFilterableProperty = keyof Pick<
  User,
  "firstName" | "lastName" | "username"
>;

export type UserSearchQueryParam = {
  searchBy: UserFilterableProperty;
  searchValue: string;
};
