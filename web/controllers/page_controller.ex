defmodule JellyBoard.PageController do
  use JellyBoard.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
