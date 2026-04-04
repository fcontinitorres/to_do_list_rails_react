class TodosController < ApplicationController
  before_action :set_todo, only: %i[ show edit update_completed destroy ]

  # GET /todos or /todos.json
  def index
    @todos = Todo.order(created_at: :desc)

    respond_to do |format|
      format.html
      format.json { render json: @todos }
    end
  end

  # GET /todos/1 or /todos/1.json
  def show
    respond_to do |format|
      format.html # renderiza show.html.erb
      format.json { render json: @todo }
    end
  end

  # GET /todos/new
  def new
    @todo = Todo.new
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos or /todos.json
  def create
    @todo = Todo.new(todo_params)

    respond_to do |format|
      if @todo.save
        format.html { redirect_to @todo, notice: "Todo was successfully created." }
        format.json { render :show, status: :created, location: @todo }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /todos/1 or /todos/1.json
  # Esse metodo só deve alterar o field "completed" do registro.
  def update_completed
    respond_to do |format|
      # params[:todo][:completed]
      if @todo.update(completed: todo_params[:completed])
        format.html { redirect_to todos_path, notice: "Todo was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @todo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todos/1 or /todos/1.json
  def destroy
    @todo.destroy!

    respond_to do |format|
      format.html { redirect_to todos_path, notice: "Todo was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.expect(todo: [ :name, :completed ])
    end
end
