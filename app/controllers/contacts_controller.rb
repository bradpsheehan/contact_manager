class ContactsController < ApplicationController

  respond_to :json

  def index
    @contacts ||= Contact.all
    render json: @contacts
  end

  def new
    @new_contact = Contact.new
  end

  def create
    @new_contact = Contact.create(params.require(:contact).permit(:last_name,
                                                                  :first_name,
                                                                  :email,
                                                                  :phone_number))
    redirect_to new_contact_path
  end



end
