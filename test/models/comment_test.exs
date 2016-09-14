defmodule JellyBoard.CommentTest do
  use JellyBoard.ModelCase, async: true

  import JellyBoard.Factory

  alias JellyBoard.Comment

  @valid_attrs %{text: "some content"}
  @invalid_attrs %{}

  setup do
    list = create(:list_with_cards)
      |> Repo.preload([:board, :cards])

    {:ok, list: list, card: List.first(list.cards)}
  end

  test "changeset with valid attributes", %{list: list, card: card} do
    attributes = @valid_attrs
    |> Map.put(:user_id, list.board.user_id)
    |> Map.put(:card_id, card.id)

    changeset = Comment.changeset(%Comment{}, attributes)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Comment.changeset(%Comment{}, @invalid_attrs)
    refute changeset.valid?
  end
end
