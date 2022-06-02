import React from "react";
import { Card, CardContent, Typography } from '@mui/material'
import styled from "@emotion/styled";

function RecipeCard(props: any) {
    return (
        <Card sx={{ width: "25%", margin: "1rem" }}>
            <CardContent>
                <Typography color="text.secondary">
                    {props.firstName} {props.lastName}
                    {props.children}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RecipeCard;