class LikesController < ApplicationController
  def create
    like = Like.new(like_params)
    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    like = Like.find_by(id: params[:id])
    like.destroy
    render json: like
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :likeable_type, :likeable_id)
  end  
end
