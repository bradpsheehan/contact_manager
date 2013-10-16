require 'spec_helper'

describe 'user creates a new contact' do
  it 'can create a new contact' do
    visit new_contact_path
    fill_in 'contact_first_name', :with => "Bradley"
    fill_in 'contact_last_name', :with => "brad@example.com"
    fill_in 'contact_email', :with => "brad@example.com"
    fill_in 'contact_phone_number', :with => "brad@example.com"
    click_button 'Create Contact'
    expect( current_path ).to eq new_contact_path
  end
end
