defmodule JellyBoard.CardController do
  use JellyBoard.Web, :controller

  plug Guardian.Plug.EnsureAuthenticated, handler: JellyBoard.SessionController

  alias JellyBoard.{Repo, Card}

  def show(conn, %{"board_id" => board_id, "id" => card_id}) do
    card = Card
     |> Card.get_by_user_and_board(card_id, current_user(conn).id, board_id)
     |> Repo.one!

    render(conn, "show.json", card: card)
  end

  defp current_user(conn)  do
    Guardian.Plug.current_resource(conn)
  end
end
