class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render 'index'
    end

    def show
        @cat = Cat.find_by(id:params[:id])
        if @cat
            render :show
        else
            redirect_to cats_url
        end
    end

    def new
        @cat = Cat.new
        render :new
    end

    def create
        @cat = Cat.new(cat_params)
        if @cat.save
            redirect_to cats_url
        else
            redirect_to new_cat_url
        end
    end

    def edit
      @cat = Cat.find(params[:id])
      render :edit
    end

    def update
      @cat = Cat.find(params[:id])
      if @cat.update(cat_params)
        redirect_to cats_url
      else
        render json: @cat.errors.full_messages, status: 422
      end
    end

    private
    def cat_params
        params.require(:cat).permit(:name, :color, :birth_date, :sex, :description)
    end
end
