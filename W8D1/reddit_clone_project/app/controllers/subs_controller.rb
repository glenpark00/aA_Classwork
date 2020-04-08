class SubsController < ApplicationController
  before_action :require_mod, only: [:edit, :update]
  before_action :require_login

    def index
        @subs = Sub.all
        render :index
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator = current_user
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def new
        @sub = Sub.new
        render :new
    end

    def edit
        @sub = Sub.find(params[:id])
        render :edit
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def update
        @sub = Sub.find(params[:id])
        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def sub_params
        params.require(:sub).permit(:title, :description)
    end

    def require_mod
        sub = Sub.find_by(id: params[:id])
        redirect_to subs_url unless current_user.id == sub.moderator
    end
end
