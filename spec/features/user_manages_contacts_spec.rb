require 'spec_helper'

describe 'user creates a new contact' do
  it 'can create a new contact' do
    visit root_path
    save_and_open_page
    fill_in 'contact_first_name', :with => "Bradley"
    fill_in 'contact_last_name', :with => "brad@example.com"
    fill_in 'contact_email', :with => "brad@example.com"
    fill_in 'contact_phone_number', :with => "brad@example.com"
    click_button 'Create Contact'
    expect( current_path ).to eq root_path
  end
end






# require 'spec_helper'

# describe 'user creates a blog post' do
#   it 'can create a post from the index page' do
#     visit root_path
#     fill_in 'Title', :with => "Nick and Brad's blog"
#     fill_in 'Body', :with => "The best blog post about nothing"
#     # save_and_open_page
#     click_button 'Create Article'
#     expect( current_path ).to eq root_path
#     expect( page ).to have_content "Nick and Brad's blog"
#     expect( page ).to have_content "The best blog post about nothing"
#   end
# end

# describe 'user cannot create an empty post'
#   it "does not allow user to create an article without a body"
# end
