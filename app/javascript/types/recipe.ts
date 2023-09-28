export type RecipeType = {
	created_at: string;
	id: number;
	image: string;
	ingredients: string;
	instruction: string;
	name: string;
	updated_at: string;
};

export type RecipesType = RecipeType[];