require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
    background :each do 
        visit new_user_url 
    end

  scenario 'has a new user page' do
    expect(page).to have_content("Sign Up")
  end

  feature 'signing up a user' do
    scenario 'shows email on the homepage after signup' do
        fill_in "Email", with: "Glen1000"
        fill_in "Password", with: "123456"
        click_on "Join"
        expect(page).to have_content("Glen1000")
    end 
  end
end

feature 'logging in' do
User.create(email: "Glen2", password: '123456')
  scenario 'shows email on the homepage after login' do
    visit new_session_url
    fill_in "user[email]", with: "Glen2"
    fill_in "user[password]", with: "123456"
    click_on "Log In"
    
    expect(page).to have_content('Glen2')
  end
end

feature 'logging out' do
  subject(:user) { User.create(email: "Glen1", password: '123456') }

  scenario 'begins with a logged in state' do
    visit user_url(user)
    expect(page).to have_content('Log Out')
  end

  scenario 'doesn\'t show email on the homepage after logout' do
    visit user_url(user)
    click_on "Log Out"
    expect(page).to have_no_content(user.email)
  end

end