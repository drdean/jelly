defmodule JellyBoard.CardView do
  use JellyBoard.Web, :view

  def render("show.json", %{card: card}) do
    card
  end
end
