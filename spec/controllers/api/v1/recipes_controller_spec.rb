require 'rails_helper'

RSpec.describe Api::V1::RecipesController, type: :controller do
  let!(:recipe) { FactoryGirl.create(:recipe) }

  describe "GET #index" do
    it "returns a collection of records" do
      get :index
      expect(JSON.parse(response.body)).to eq([recipe].as_json)
    end
  end

  describe "POST #create" do
    it "creates a new recipe record" do
      recipe_params = FactoryGirl.attributes_for(:recipe)
      params = {}
      expect { post :create, params: recipe_params }.to change(Recipe, :count).by(1)
    end
  end

  describe "GET #show" do
    it "returns a single record" do
      get :show, params: {id: recipe.id}
      expect(JSON.parse(response.body)).to eq(recipe.as_json)
    end
  end

  describe "DELETE #destroy" do
    it "deletes a record" do
      expect { post :destroy, params: {id: recipe.id} }.to change(Recipe, :count).by(-1)
    end
  end
end
