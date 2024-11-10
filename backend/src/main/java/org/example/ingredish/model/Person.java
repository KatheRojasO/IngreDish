package org.example.ingredish.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Person {
    @Id
    private long userId;

    private String email;
    private String name;

    @OneToMany
    private List<FavoriteRecipe> favorites;

    public Person() {}

    public Person(long userId, String email, String name) {
        this.userId = userId;
        this.email = email;
        this.name = name;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<FavoriteRecipe> getFavorites() {
        return favorites;
    }
}
