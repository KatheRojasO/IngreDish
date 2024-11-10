package org.example.ingredish.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FavoriteRecipe {
    @Id
    private long productId;

    private String title;
    private String image;


    public FavoriteRecipe() {}

    public FavoriteRecipe(long productId, String title, String image) {
        this.productId = productId;
        this.title = title;
        this.image = image;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
