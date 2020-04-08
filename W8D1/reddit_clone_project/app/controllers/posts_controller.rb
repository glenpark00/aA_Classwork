class PostsController < ApplicationController
  before_action :require_login

  def create
    debugger
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render 
    flash[:errors] = @post.errors.full_messages
    redirect_to user_url(@post.author_id)
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(post_params)
      redirect_to user_url(@post.author_id)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy if current_user.id == post.author_id
    redirect_to users_url
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  # def index
  #   @posts = Post.where("sub_id = #{ params[:sub_id] }")
  #   @posts = Sub.find(params[:sub_id]).posts
  #   render :index
  # end

  def post_params
    params.require(:post).permit(:title, :url, :context, sub_id: [])
  end
end
