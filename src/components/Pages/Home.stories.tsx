import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from "../../pages";

export default {
    title: "Pages/Home",
    component: Home,   
} as ComponentMeta <typeof Home>


export const HomePage: ComponentStory <typeof Home> = () => <Home />
