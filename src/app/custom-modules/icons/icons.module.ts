import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';

// Select some icons (use an object, not an array)


import { Camera, Heart, Github, Home, Menu } from 'angular-feather/icons';
 
const icons = {
  Camera,
  Heart,
  Github,
  Home,
  Menu
};
 
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }