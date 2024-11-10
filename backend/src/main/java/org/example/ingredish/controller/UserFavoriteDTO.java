package org.example.ingredish.controller;

import java.util.List;

public record UserFavoriteDTO(int userId, String username, List<FavoriteDTO> favoriteRecipes) {
}
