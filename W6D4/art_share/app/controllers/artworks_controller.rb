class ArtworksController < ApplicationController

  def index
    owners_artworks = Artwork.where(artist_id: params[:user_id])
    shared_with_artworks = User.find_by(id: params[:user_id]).shared_artworks
    # You can concatenate ActiveRecord Relations!!
    render json: owners_artworks + shared_with_artworks
  end

  def show
    artwork = Artwork.find_by(id:params[:id])
    render json: artwork
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      redirect_to "/artworks/#{artwork.id}"
    else
      render json: artwork.errors.full_messages, status: :unprocesseable_entity
    end
  end

  def update
    artwork = Artwork.find_by(id: params[:id])
    if artwork.update(artwork_params)
      redirect_to "/artworks/#{artwork.id}"
    else
      render json: artwork.errors.full_messages, status: :unprocesseable_entity
    end    
  end

  def destroy
    artwork = Artwork.find_by(id: params[:id])
    artwork.destroy
    render json: artwork
  end

  private
  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end
