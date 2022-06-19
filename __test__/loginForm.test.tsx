/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 import { LoginForm } from '../pages/user/login/loginForm';
 import { waitFor } from '@testing-library/react'
 import { nanoid } from 'nanoid';
 
 jest.mock("nanoid", () => {
   return { nanoid: () => "1234" };
 });


 
 let container = null;
 beforeEach(() => {
   // setup a DOM element as a render target
   container = document.createElement("div");
   document.body.appendChild(container);
 });
 
 afterEach(() => {
   // cleanup on exiting
   unmountComponentAtNode(container);
   container.remove();
   container = null;
 });
 
 it("Required fields", async () => {
  await waitFor(() => {
    render(<LoginForm/>, container);
   });
   const buttons = document.querySelectorAll("button");
   await waitFor(() => {
     buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
   }); 
   setTimeout(()=>{expect(document.querySelector("form div div:nth-child(2)").innerHTML).toBe('Required')},1000);
 });