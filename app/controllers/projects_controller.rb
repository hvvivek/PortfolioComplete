class ProjectsController < ApplicationController
  USERS = { "admin" => "password" }

  before_action :authenticate, only: [:new, :edit, :destroy, :login]
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = if params[:tag]
      Project.tagged_with(params[:tag])
    else
      Project.all
    end
  end

  def login
    @projects = if params[:tag]
      Project.tagged_with(params[:tag])
    else
      Project.all
    end
  end

  def contact
  end
  
  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def current_user
    @current_user
  end

  helper_method :current_user

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end
    
    def authenticate
      current_user_name = nil
      is_authenticated = authenticate_or_request_with_http_digest do |username|
        current_user_name = username
        USERS[username]
      end
      @current_user = current_user_name if is_authenticated
      is_authenticated
   end
   

    

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:tag_list, :title, :thumb_img, :thumb_vid, :short_desc, :location, :period, :date, :long_desc, :recognition, :role, :views, collaborators_attributes: [:id, :name, :link, :contact, :project_id, :created_at, :updated_at, :_destroy], instructors_attributes: [:id, :name, :link, :contact, :project_id, :created_at, :updated_at, :_destroy], media_attributes: [:id, :caption, :link, :credits, :mediatype, :order, :aspect, :autoplay, :long_desc,  :project_id, :created_at, :updated_at, :_destroy])
    end
end
