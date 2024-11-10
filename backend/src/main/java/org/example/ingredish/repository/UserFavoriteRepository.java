package org.example.ingredish.repository;

import org.example.ingredish.model.UserFavorite;
import org.springframework.data.repository.ListCrudRepository;

import java.util.Optional;

public interface UserFavoriteRepository extends ListCrudRepository<UserFavorite, Integer> {
    Optional<UserFavorite> findByUserUserIdAndRecipeId(String userId, int recipeId);

    void deleteByUserUserIdAndRecipeId(String userId, int recipeId);
}
