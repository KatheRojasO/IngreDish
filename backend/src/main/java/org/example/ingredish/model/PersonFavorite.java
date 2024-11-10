package org.example.ingredish.model;

import jakarta.persistence.*;

@Entity
public class PersonFavorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Person person;

    @ManyToOne
    private FavoriteRecipe favoriteRecipe;

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public FavoriteRecipe getFavoriteRecipe() {
        return favoriteRecipe;
    }

    public void setFavoriteRecipe(FavoriteRecipe favoriteRecipe) {
        this.favoriteRecipe = favoriteRecipe;
    }
}
