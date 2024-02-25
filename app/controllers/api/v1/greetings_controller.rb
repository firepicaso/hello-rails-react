class Api::V1::GreetingsController < ApplicationController
  before_action :set_default_format

  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: { text: @greeting.text }
  end

  private

  def set_default_format
    request.format = :json
  end
end
