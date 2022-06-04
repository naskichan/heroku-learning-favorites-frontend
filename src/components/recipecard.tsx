import React from "react";
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import styled from "@emotion/styled";

interface Ingredient {
    name: string;
}
function RecipeCard(props: any) {
    return (
        <Card sx={{ width: "25%", margin: "1rem" }}>
            <CardContent>
                <CardMedia component="img" image={props.imageUrl} alt={props.title} />
                <Typography color="text.secondary">
                    {props.title}
                    {props.recipeIngredients.map((recipeIngredient: { ingredient: Ingredient, quantity: number, unit: string, description: string }) => {
                        return (
                            <div color="text.primary">
                                <Typography>{recipeIngredient.quantity} {recipeIngredient.unit} {recipeIngredient.ingredient.name}</Typography>
                                {recipeIngredient.description}
                            </div>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RecipeCard;