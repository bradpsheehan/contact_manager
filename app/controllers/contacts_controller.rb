class ContactsController < ApplicationController

  def index
    @new_contact = Contact.new
  end

  def create
    @new_contact = Contact.create(params.require(:contact).permit(:last_name,
                                                                  :first_name,
                                                                  :email,
                                                                  :phone_number))
    redirect_to root_path
  end


end
