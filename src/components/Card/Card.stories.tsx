import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card'

export default {
    title: "Pages/Card",
    component: Card,   
} as ComponentMeta <typeof Card>


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
    color:"Primary",
    children: "This is Primary"
}

export const Orange = Template.bind({})
Orange.args = {
    color:"Orange",
    children: "This is Orange"
}

