package org.example.ingredish.repository;

import org.example.ingredish.model.FavoriteRecipe;
import org.springframework.data.repository.ListCrudRepository;

public interface FavoriteRecipeRepository extends ListCrudRepository<FavoriteRecipe, Integer> {
}
