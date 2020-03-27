class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find_by(id: params[:id])
    render :show
  end

  def new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band)
    else
      redirect_to new_band_url
    end
  end

  def edit
    render :edit
  end

  def update
    band = Band.find_by(id: params[:id])
    if band && band.update(band_params)
      redirect_to band_url(band.id)
    else
      redirect_to edit_band_url
    end
  end

  def destroy
    band = Band.find_by(id: params[:id])
    band.destroy
    redirect_to new_band_url
  end

  def band_params
    params.require(:band).permit(:name)
  end
end
