class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: { text: @greeting.text }
  end
end
