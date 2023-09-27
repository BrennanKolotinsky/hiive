require 'rails_helper'

RSpec.describe Recipe, type: :model do
	let(:recipe) { FactoryGirl.create(:recipe) }

	describe '#name' do
		it 'returns a valid record when a name is set' do
			expect(recipe.valid?).to be(true)
		end

		it 'requires name to not be nil' do
			recipe.update(name: nil)
			expect(recipe.valid?).to be(false)
			expect(recipe.errors[:name]).to include("can't be blank")
		end
	end
end
