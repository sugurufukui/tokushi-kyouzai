class Api::V1::TestController < ApplicationController
  def index
    render json: { message: "hello world"}
  end
end
