﻿#version 330

out vec4 outputColor;

//in vec2 texCoord;
//uniform sampler2D texture0;

uniform vec3 my_color;

void main()
{
    //outputColor = texture(texture0, texCoord);
    outputColor = vec4(my_color, 1.0);
}