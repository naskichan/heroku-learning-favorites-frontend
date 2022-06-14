import React from "react";
import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material'
import styled from "@emotion/styled";

interface Ingredient {
    name: string;
}
function RecipeCard(props: any) {
    return (
        <Card sx={{ width: "25%", margin: "1rem" }}>
            <CardActionArea href={props.originUrl}>
                <CardMedia component="img" height={256} image={props.imageUrl} alt={props.title} />
                <CardContent sx={{ p: 1, width: "256" }}>
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    <Typography color="text.secondary">
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
            </CardActionArea>
        </Card>
    )
}

export default RecipeCard;